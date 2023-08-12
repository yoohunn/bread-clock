'use client';
import { ChevronLeftIcon } from '@/components/ui';
import { useRouter } from 'next/navigation';

interface Props {}

export function BakeryHeader({}: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='px-2 w-full h-12 bg-stone-100 bg-opacity-95 flex-row-center justify-between'
    >
      <ChevronLeftIcon className={'w-6 h-6'} />
    </button>
  );
}
