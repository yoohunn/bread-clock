'use client';
import type { ChangeEvent } from 'react';
import { useState, useEffect, useCallback } from 'react';


export function SearchBar() {
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
    <div>
      <input
        type='text'
        value={searchTerm}
        onChange={onChange}
        placeholder='검색어를 입력하세요...'
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            <button onClick={() => onClick(suggestion)} className='w-full'>
              {suggestion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
