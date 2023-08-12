'use client';

import { SearchBar } from '@/components/SearchBar';
import { BakeryList } from '@/components/BakeryList';
import { Loading } from '@/components/Loading';
import { useBakeries } from '@/hook/swr/useBakeries';

interface Props {}

export function SearchList({}: Props) {
  const { bakeries } = useBakeries();

  return (
    <>
      <SearchBar />
      <BakeryList
        className={'h-[calc(100%-200px)] bg-gray-300'}
        bakeries={bakeries}
      >
        <div className={'py-6 flex-center'}>
          <Loading />
        </div>
      </BakeryList>
    </>
  );
}
