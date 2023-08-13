'use client';

import { useState } from 'react';

import { BakeryDetail, SearchBakeryParams } from '@/models';
import { useSearchBakeries } from '@/hook/swr/useSearchBakeries';

import { SearchBar } from '@/components/SearchBar';
import { BakeryList } from '@/components/BakeryList';

interface Props {
  fallback?: BakeryDetail[];
}

export function SearchList({ fallback }: Props) {
  const [query, setQuery] = useState('');
  const [params, setParams] = useState<SearchBakeryParams | undefined>({
    size: '50',
  });

  const { bakeries, isValidating } = useSearchBakeries(params, fallback);

  const onClick = () => {
    setParams((prev) => ({ ...prev, q: query }));
  };

  return (
    <>
      <SearchBar query={query} onChange={setQuery} onClick={onClick} />
      <BakeryList
        className={'h-[calc(100%-200px)] bg-gray-300'}
        bakeries={bakeries}
        searched={Boolean(params?.q)}
      />
    </>
  );
}
