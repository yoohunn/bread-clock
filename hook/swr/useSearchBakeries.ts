'use client';

import useSWR from 'swr';

import type { SearchBakeryParams, BakeryDetail } from '@/models';

export function useSearchBakeries(searchParams?: SearchBakeryParams) {
  const params = new URLSearchParams(searchParams).toString();
  const queryString = params ? `?${params}` : '';

  const { data: bakeries } = useSWR<BakeryDetail[]>(`/search${queryString}`, {
    keepPreviousData: true,
  });

  return { bakeries };
}
