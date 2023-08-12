'use client';

import { BreadTagList } from '@/components/BreadTagList';
import Link from 'next/link';
import { Bread } from '@/models';
import { useBakery } from '@/hook/swr/useBakery';

interface Props {
  breads: Bread[];
  id: number;
}

export function BuyableBreadList({ id }: Props) {
  const { bakery } = useBakery(id);
  const filtered = bakery?.breads?.filter((i) => i.available);

  return (
    <section className={'relative px-4 py-6 bg-gray-300'}>
      <h3 className={'body-16-bold text-gray-700'}>살 수 있는 빵</h3>
      <BreadTagList className={'mt-2.5 '} breads={filtered} />
      {/*<button className={'btn mt-4 w-full'}>더보기</button>*/}

      <Link
        href={`/bakery/sold-out?id=${id}`}
        className={
          'absolute top-7 right-4 callout-13-semibold text-primary-800'
        }
      >
        매진 체크
      </Link>
    </section>
  );
}
