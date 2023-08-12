'use client';
import { SWRConfig } from 'swr';
import axios from 'axios';

export function SWRProvider({ children }: WithChildren) {
  return (
    <SWRConfig
      value={{
        fetcher,
        shouldRetryOnError: false,
        revalidateOnFocus: false,
        dedupingInterval: 1000 * 60 * 5,
      }}
    >
      {children}
    </SWRConfig>
  );
}

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  withCredentials: true,
});

async function fetcher(url: string) {
  console.log('swr request url:', process.env.NEXT_PUBLIC_API_HOST + url);

  const res = await client.get(url);

  return res.data;
}
