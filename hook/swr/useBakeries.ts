'use client';

import useSWR from 'swr';

import type { Bakery, BakerySearchParams } from '@/models';

export function useBakeries(searchParams?: BakerySearchParams) {
  const params = new URLSearchParams(searchParams).toString();
  const queryString = params ? `?${params}` : '';

  const { data: bakeries } = useSWR<Bakery[]>(`/bakeries${queryString}/`, {
    keepPreviousData: true,
  });

  return { bakeries };
}
