'use client';

import useSWRImmutable from 'swr/immutable';
import { toast } from 'react-hot-toast';

import { BakeryDetail } from '@/models';
import { userService } from '@/services/user';
import { tokenStorage } from '@/utils/token';

export function useFavorite(id: number) {
  const { data: bakery, mutate } = useSWRImmutable<BakeryDetail>(
    tokenStorage.access ? `/bakeries/${id}` : null,
  );

  const toggle = async (favorite: boolean) => {
    if (!tokenStorage.access || !bakery) {
      return;
    }
    if (favorite) {
      await userService.removeFavorite(id.toString());
      toast('즐겨찾기에서 삭제했어요!');
    } else {
      await userService.addToFavorite(id.toString());
      toast('즐겨찾기에 저장되었어요!');
    }

    mutate({
      optimisticData: { ...bakery, favorite: !favorite },
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    });
  };
  return { favorite: bakery?.favorite, toggle };
}
