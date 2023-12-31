'use client';

import useSWR from 'swr';

import type { BakeryParams, BakeryDetail } from '@/models';

export function useBakeries(searchParams?: BakeryParams) {
  const params = new URLSearchParams(searchParams).toString();
  const queryString = params ? `?${params}` : '';

  const { data: bakeries } = useSWR<BakeryDetail[]>(`/bakeries${queryString}`, {
    keepPreviousData: true,
  });

  return { bakeries };
}
