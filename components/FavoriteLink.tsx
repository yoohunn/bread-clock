'use client';
import { StarFillIcon, StartIcon } from '@/components/ui';

interface Props {
  favorite: boolean;
}
export function FavoriteLink({ favorite }: Props) {
  if (favorite) {
    return (
      <button>
        <StarFillIcon className={'w-6 h-6 text-gray-900'} />
      </button>
    );
  }
  return (
    <button>
      <StartIcon className={'w-6 h-6 text-gray-900'} />
    </button>
  );
}
