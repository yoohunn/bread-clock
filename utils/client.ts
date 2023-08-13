import axios from 'axios';
import { tokenStorage } from '@/utils/token';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  headers: {
    Authorization: `Bearer ${tokenStorage.access || ''}`,
  },
});

client.interceptors.request.use(
  async (config) => {
    const accessToken = tokenStorage.access;

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
