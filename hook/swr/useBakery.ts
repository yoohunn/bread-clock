'use client';

import useSWR from 'swr';

import type { BakeryDetail, AvailableBread } from '@/models';
import { bakeryService } from '@/services/bakery';
import { toast } from 'react-hot-toast';

export function useBakery(id: number) {
  const {
    data: bakery,
    isLoading,
    mutate,
  } = useSWR<BakeryDetail>(`/bakeries/${id}`, {
    keepPreviousData: true,
  });

  const updateAvailable = async (available: AvailableBread[]) => {
    await bakeryService.updateSoldoutBreads(id.toString(), {
      breads: available,
    });
    toast('변경 사항이 저장되었습니다.');
    mutate();
  };

  return { bakery, isLoading, updateAvailable };
}
