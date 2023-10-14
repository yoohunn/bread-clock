'use client';
import Link from 'next/link';
import { BakeryList } from '@/components/BakeryList';
import { useBakeries } from '@/hook/swr/useBakeries';

interface Props {}

export function FavoriteList({}: Props) {
  const { bakeries } = useBakeries();
  const favoriteList = bakeries?.filter((i) => i.favorite);

  return (
    <div style={{ height: 'calc(100% - 64px)' }} className={'pb-16'}>
      {favoriteList?.length === 0 ? (
        <div className='p-4'>
          <div className='w-full h-[180px] px-4 py-10 bg-white rounded-xl flex-col justify-center items-center gap-4 inline-flex'>
            <p className='text-center body-16-regular text-gray-800'>
              즐겨찾는 빵집이 없어요.
              <br />
              저장하러 가시겠어요?
            </p>
            <Link
              href={'/search'}
              className='px-4 h-10 rounded-xl flex-center callout-15-bold bg-primary-800 text-white'
            >
              빵집 찾기
            </Link>
          </div>
        </div>
      ) : (
        <BakeryList className={'h-full pb-10'} bakeries={favoriteList} />
      )}
    </div>
  );
}
