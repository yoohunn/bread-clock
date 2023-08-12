'use client';

import Link from 'next/link';

import { BakeryItem } from '@/components/BakeryItem';
import { BakeryDetail } from '@/models';

interface Props extends WithClassName, WithChildren {
  bakeries?: BakeryDetail[];
}
export function BakeryList({ className, children, bakeries }: Props) {
  if (!bakeries) {
    return <></>;
  }
  return (
    <ul
      className={`mt-4 p-4 overflow-scroll flex flex-col gap-4 flex-1 hide-scrollbar ${className}`}
    >
      {bakeries.map((item) => (
        <li key={item.id}>
          <Link href={`/bakery/${item.id}`}>
            <BakeryItem item={item} />
          </Link>
        </li>
      ))}
      {children}
    </ul>
  );
}
