'use client';

import Link from 'next/link';

import { BakeryItem } from '@/components/BakeryItem';
import { BakeryDetail, Bread } from '@/models';

interface Props extends WithClassName, WithChildren {
  bakeries?: BakeryDetail[];
  searched?: boolean;
}
export function BakeryList({ className, children, bakeries, searched }: Props) {
  if (!bakeries) {
    return <></>;
  }
  if (bakeries.length === 0) {
    return (
      <div className='mt-4 w-full px-4 py-10'>
        <p className='body-16-regular text-center text-gray-700'>
          검색 결과가 없습니다.
          <br />
          다시 검색해 주세요.
        </p>
      </div>
    );
  }
  return (
    <ul
      className={`mt-4 p-4 overflow-scroll flex flex-col gap-4 flex-1 hide-scrollbar ${className}`}
    >
      {bakeries.map((item) => (
        <li key={item.id}>
          <Link href={`/bakery/${item.id}`}>
            <BakeryItem
              item={item}
              searched={searched ? item.breads[0] : undefined}
            />
          </Link>
        </li>
      ))}
      {children}
    </ul>
  );
}
