'use client';

import { MouseEvent } from 'react';

import { useFavorite } from '@/hook/swr/useFavorite';
import { StarFillIcon, StartIcon } from '@/components/ui';
import { AuthDrawerButton } from '@/components/AuthDrawerButton';

interface Props {
  id: number;
}

export function FavoriteButton({ id }: Props) {
  const { favorite, toggle } = useFavorite(id);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('🌟🌟🌟🌟click: ', favorite);

    if (typeof favorite === 'undefined') {
      return;
    }
    toggle(favorite);
  };

  return (
    <AuthDrawerButton
      buttonNode={
        <button>
          <StartIcon className={'w-6 h-6 text-gray-900'} />
        </button>
      }
    >
      {favorite ? (
        <button onClick={onClick}>
          <StarFillIcon className={'w-6 h-6 text-gray-900'} />
        </button>
      ) : (
        <button onClick={onClick}>
          <StartIcon className={'w-6 h-6 text-gray-900'} />
        </button>
      )}
    </AuthDrawerButton>
  );
}
