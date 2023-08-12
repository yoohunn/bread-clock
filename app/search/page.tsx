import { SearchBar } from '@/components/SearchBar';
import { BakeryList } from '@/components/BakeryList';
import { SearchHeader } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { Loading } from '@/components/Loading';

export default function SearchPage() {
  return (
    <main className={'h-full'}>
      <SearchHeader />
      <SearchBar />
      <BakeryList className={'h-[calc(100%-200px)] bg-gray-300'}>
        <div className={'py-6 flex-center'}>
          <Loading />
        </div>
      </BakeryList>
      <BottomNav />
    </main>
  );
}
