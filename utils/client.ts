import { tokenStorage } from '@/utils/token';

interface RequestOptions extends RequestInit {
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  data?: any;
}
export class HttpClient {
  protected async request(url: string, options: RequestOptions) {
    console.log('request url:', process.env.NEXT_PUBLIC_API_HOST + url);

    const { data, method, headers } = options;

    const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + url, {
      body: JSON.stringify(data),
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenStorage.access || ''}`,
        ...headers,
      },
    });

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      console.log('🚨 fetch error: ', res.status, await res.json());
      throw error;
    }

    return await res.json();
  }

  async fetch<T>(url: string, options?: RequestOptions): Promise<T> {
    return this.request(url, { ...options, method: 'GET' });
  }
  async post<T>(url: string, data?: any, options?: RequestOptions): Promise<T> {
    return this.request(url, { data, method: 'POST', ...options });
  }
  async put<T>(url: string, data?: any): Promise<T> {
    return this.request(url, { data, method: 'PUT' });
  }
  async patch<T>(url: string, data?: any): Promise<T> {
    return this.request(url, { data, method: 'PATCH' });
  }
  async delete<T>(url: string, data?: any): Promise<T> {
    return this.request(url, { data, method: 'DELETE' });
  }
}

export const client = new HttpClient();
