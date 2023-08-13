import Image from 'next/image';

import { FavoriteButton } from '@/components/FavoriteButton';
import { BakeryDetail, Bread } from '@/models';
import { addColonToTime } from '@/utils/format';

interface Props extends WithClassName {
  item: BakeryDetail;
  searched?: Bread;
}
export function BakeryItem({ item, className, searched }: Props) {
  const { name, favorite, address, photoUrls, id } = item;

  return (
    <article
      className={
        'w-full h-auto rounded-xl shadow-default flex flex-col bg-white aspect-[5/3.9]'
      }
    >
      <section
        className={
          'flex-1 rounded-t-xl bg-gray-400 flex-center overflow-hidden'
        }
      >
        <Image src={photoUrls[0]} alt={'image'} width={430} height={193} />
      </section>
      <section className={'p-4'}>
        <div className={'flex-row-center justify-between'}>
          <h2 className={'body-18-bold'}>{name}</h2>
          <FavoriteButton id={id} />
        </div>
        <p className='mt-0.5 caption-11-regular text-neutral-500'>
          {address} (365m)
        </p>
        {searched && <SearchedBread searched={searched} />}
      </section>
    </article>
  );
}

interface SearchedBreadProps {
  searched: Bread;
}
function SearchedBread({ searched }: SearchedBreadProps) {
  const { name, availableHours, available } = searched;
  return (
    <div className='mt-2 flex-row-center gap-1.5'>
      <span className='body-15-regular'>{name} 나오는 시간</span>
      <span className='body-15-semibold text-primary-800'>
        {available ? addColonToTime(availableHours[0]) : '매진되었어요'}
      </span>
    </div>
  );
}
