'use client';

import { useState } from 'react';

import { SearchBakeryParams } from '@/models';
import { SearchBar } from '@/components/SearchBar';
import { BakeryList } from '@/components/BakeryList';
import { Loading } from '@/components/Loading';
import { useSearchBakeries } from '@/hook/swr/useSearchBakeries';

interface Props {}

export function SearchList({}: Props) {
  const [query, setQuery] = useState('');
  const [params, setParams] = useState<SearchBakeryParams | undefined>(
    undefined,
  );

  const { bakeries } = useSearchBakeries(params);

  const onClick = () => {
    setParams({ q: query });
  };

  return (
    <>
      <SearchBar query={query} onChange={setQuery} onClick={onClick} />
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
