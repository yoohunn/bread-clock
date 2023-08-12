'use client';

import useSWR from 'swr';

import type { Bakery, BakerySearchParams, BakeryDetail } from '@/models';

export function useBakeries(searchParams?: BakerySearchParams) {
  const params = new URLSearchParams(searchParams).toString();
  const queryString = params ? `?${params}` : '';

  const { data: bakeries } = useSWR<BakeryDetail[]>(`/bakeries${queryString}`, {
    keepPreviousData: true,
  });

  return { bakeries };
}
