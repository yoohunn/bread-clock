import { BottomNav } from '@/components/BottomNav';
import { SearchHeader } from '@/components/Header';
import { BakeryList } from '@/components/BakeryList';
import Link from 'next/link';

export default function FavoritePage() {
  const bakerires = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <main className={'h-full flex flex-col'}>
      <SearchHeader />
      <div className={'flex-1'}>
        {bakerires.length === 0 ? (
          <div className='p-4'>
            <div className='w-full h-[180px] px-4 py-10 bg-white rounded-xl flex-col justify-center items-center gap-4 inline-flex'>
              <p className='text-center body-16-regular text-gray-800'>
                즐겨찾는 빵집이 없어요.
                <br />
                저장하러 가시겠어요?
              </p>
              <Link
                href={'/search'}
                className='px-4 h-10 rounded-xl flex-center callout-15-bold bg-primary-800 text-white'
              >
                빵집 찾기
              </Link>
            </div>
          </div>
        ) : (
          <BakeryList className={'h-[675px] pb-10'} />
        )}
      </div>
      <BottomNav />
    </main>
  );
}
