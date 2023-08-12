import { StartIcon } from '@/components/ui';
import { FavoriteLink } from '@/components/FavoriteLink';

export function BakeryItem({ className }: WithClassName) {
  return (
    <article
      className={'h-[269px] rounded-xl shadow-default flex flex-col bg-white'}
    >
      <section className={'flex-1 rounded-t-xl bg-gray-400'}></section>
      <section className={'p-4'}>
        <div className={'flex-row-center justify-between'}>
          <h2 className={'body-18-bold'}>빵집이름</h2>
          <FavoriteLink />
        </div>
        <p className='mt-0.5 caption-11-regular text-neutral-500'>
          서울 기역구 가나다라로98길 33 마바사빌딩 1층 (365m)
        </p>
      </section>
    </article>
  );
}
