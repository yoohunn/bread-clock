import Image from 'next/image';

import { FavoriteButton } from '@/components/FavoriteButton';
import { BakeryDetail } from '@/models';

interface Props extends WithClassName {
  item: BakeryDetail;
}
export function BakeryItem({ item, className }: Props) {
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
      </section>
    </article>
  );
}
