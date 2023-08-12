'use client';

import useSWR from 'swr';

import type { BakeryDetail } from '@/models';

export function useBakery(id: number) {
  const { data: bakery } = useSWR<BakeryDetail>(`/bakeries/${id}`, {
    keepPreviousData: true,
  });

  return { bakery };
}
