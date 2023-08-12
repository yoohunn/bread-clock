'use client';

import { useRouter } from 'next/navigation';
import useSWR, { useSWRConfig } from 'swr';
import { toast } from 'react-hot-toast';

import { userService } from '@/services/user';
import { BakeryDetail } from '@/models';
import useSWRImmutable from 'swr/immutable';

export function useFavorite(id: number) {
  const { data: bakery, mutate } = useSWRImmutable<BakeryDetail>(
    `/bakeries/${id}`,
  );

  const toggle = async (favorite: boolean) => {
    console.log('🌟🌟🌟🌟toggle: ', favorite);
    if (!bakery) {
      return;
    }
    if (favorite) {
      console.log('🌟🌟🌟🌟delete: ');
      await userService.removeFavorite(id.toString());
      toast.success('즐겨찾기에서 삭제했어요!');
    } else {
      console.log('🌟🌟🌟🌟add: ');
      await userService.addToFavorite(id.toString());
      toast.error('즐겨찾기를 수정하지 못했습니다.');
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
