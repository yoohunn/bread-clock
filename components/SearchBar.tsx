'use client';
import { SearchIcon } from '@/components/ui';

interface Props extends WithClassName {
  query: string;
  onChange: (query: string) => void;
  onClick: () => void;
}
export function SearchBar({ className, query, onChange, onClick }: Props) {
  return (
    <form className={`mt-2 px-4 w-full ${className}`}>
      <label
        className={`flex bg-white rounded-xl focus-within:ring-[1.4px] focus-within:ring-primary-800`}
      >
        <input
          type='text'
          value={query}
          onChange={(event) => onChange(event.target.value)}
          placeholder='검색어를 입력하세요...'
          className={'px-4 flex-1 bg-transparent'}
        />
        <button
          className={'p-3'}
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          <SearchIcon className={'w-6 h-6 text-gray-700'} />
        </button>
      </label>
    </form>
  );
}
