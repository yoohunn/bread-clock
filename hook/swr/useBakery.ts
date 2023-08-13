'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import useSWRImmutable from 'swr/immutable';

import type { BakeryDetail, AvailableBread } from '@/models';
import { bakeryService } from '@/services/bakery';

export function useBakery(id: number) {
  const {
    data: bakery,
    isLoading,
    mutate,
  } = useSWRImmutable<BakeryDetail>(`/bakeries/${id}`, {
    keepPreviousData: true,
  });

  const router = useRouter();

  const updateAvailable = async (available: AvailableBread[]) => {
    await bakeryService.updateSoldoutBreads(id.toString(), {
      breads: available,
    });
    router.push(`/bakery/${id}`);
    toast('변경 사항이 저장되었습니다.');
    mutate();
  };

  return { bakery, isLoading, updateAvailable };
}
