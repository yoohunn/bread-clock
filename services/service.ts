import axios from 'axios';
import cookies from 'js-cookie';

import { tokenStorage } from '@/utils/token';
// import { client } from '@/utils/client';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  headers: {
    Authorization: `Bearer ${tokenStorage.access || ''}`,
  },
});

export default class Service {
  protected readonly cookie = cookies;
  protected readonly tokenStorage = tokenStorage;
  protected readonly client = client;
}
