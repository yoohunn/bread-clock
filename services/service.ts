import cookies from 'js-cookie';

import { tokenStorage } from '@/utils/token';
import { client } from '@/utils/client';

export default class Service {
  protected readonly cookie = cookies;
  protected readonly tokenStorage = tokenStorage;
  protected readonly client = client;
}
