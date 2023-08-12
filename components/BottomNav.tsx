'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchIcon, StartIcon } from '@/components/ui';

export function BottomNav() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `flex-1 flex-center flex-col text-[10px] ${
      pathname === href ? 'text-primary-800' : 'text-gray-500'
    }`;

  return (
    <nav className={'absolute bottom-0 left-0 right-0 h-16 flex bg-gray-100'}>
      <Link href='/search' className={linkClass('/search')}>
        <SearchIcon className={'w-6 h-6'} />
        <span>검색</span>
      </Link>
      <Link href='/favorite' className={linkClass('/favorite')}>
        <StartIcon className={'w-6 h-6'} />
        <span>즐겨찾기</span>
      </Link>
    </nav>
  );
}
