import { FavoriteLink } from '@/components/FavoriteLink';
import { BakeryDetail } from '@/models';

interface Props extends WithClassName {
  item: BakeryDetail;
}
export function BakeryItem({ item, className }: Props) {
  const { name, favorite, address, photoUrls } = item;

  return (
    <article
      className={'h-[269px] rounded-xl shadow-default flex flex-col bg-white'}
    >
      <section className={'flex-1 rounded-t-xl bg-gray-400'}>
        {/*  TODO: Image src=photoUrls[0] */}
      </section>
      <section className={'p-4'}>
        <div className={'flex-row-center justify-between'}>
          <h2 className={'body-18-bold'}>{name}</h2>
          <FavoriteLink favorite={favorite} />
        </div>
        <p className='mt-0.5 caption-11-regular text-neutral-500'>
          {address} (365m)
        </p>
      </section>
    </article>
  );
}
