'use client';
import type { ChangeEvent } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { SearchIcon } from '@/components/ui';

export function SearchBar({ className }: WithClassName) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = useCallback(async () => {
    const mock = [
      { title: 'hello' },
      { title: 'he' },
      { title: 'hel' },
      { title: 'hell' },
    ];
    const suggestions =
      searchTerm === ''
        ? []
        : mock.filter((i) => i.title.includes(searchTerm)) || [];
    const titles = suggestions.map((item: any) => item.title);
    setSuggestions(titles);
  }, [searchTerm]);

  useEffect(() => {
    getSuggestions();
  }, [getSuggestions]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <div className={`mt-2 px-4 w-full ${className}`}>
      <label
        className={`flex bg-white rounded-xl focus-within:ring-[1.4px] focus-within:ring-primary-800`}
      >
        <input
          type='text'
          value={searchTerm}
          onChange={onChange}
          placeholder='검색어를 입력하세요...'
          className={'px-4 flex-1 bg-transparent'}
        />
        <button className={'p-3'}>
          <SearchIcon className={'w-6 h-6 text-gray-700'} />
        </button>
      </label>
    </div>
  );
}
