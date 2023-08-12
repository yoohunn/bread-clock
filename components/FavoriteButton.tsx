'use client';

import { MouseEvent, useState } from 'react';

import { tokenStorage } from '@/utils/token';
import { StarFillIcon, StartIcon } from '@/components/ui';
import { useFavorite } from '@/hook/swr/useFavorite';
import { GoogleButton } from '@/components/GoogleButton';
import { OpenBottomDrawer } from '@/components/OpenBottomDrawer';

interface Props {
  id: number;
}

export function FavoriteButton({ id }: Props) {
  const { favorite, toggle } = useFavorite(id);
  console.log('🌟🌟🌟🌟favorite: ', favorite);

  if (!tokenStorage.access) {
    return (
      <OpenBottomDrawer
        buttonNode={
          <button>
            <StartIcon className={'w-6 h-6 text-gray-900'} />
          </button>
        }
      >
        <h2 className={'title-22-bold text-gray-900'}>
          더 많은 기능을 사용하려면?
        </h2>
        <GoogleButton />
      </OpenBottomDrawer>
    );
  }
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof favorite === 'undefined') {
      return;
    }
    toggle(favorite);
  };

  if (favorite) {
    return (
      <button onClick={onClick}>
        <StarFillIcon className={'w-6 h-6 text-gray-900'} />
      </button>
    );
  }

  return (
    <button onClick={onClick}>
      <StartIcon className={'w-6 h-6 text-gray-900'} />
    </button>
  );
}
