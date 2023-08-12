'use client';
import { SWRConfig } from 'swr';
import { tokenStorage } from '@/utils/token';

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

async function fetcher(url: string) {
  console.log('swr request url:', url);

  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenStorage.access || ''}`,
    },
  });

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    console.log('🚨 swr fetch error: ', res.status, await res.json());
    throw error;
  }
  return await res?.json();
}
