import { SearchBar } from '@/components/SearchBar';
import { BakeryList } from '@/components/BakeryList';
import { SearchHeader } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { Loading } from '@/components/Loading';
import { bakeryService } from '@/services/bakery';

export default async function SearchPage() {
  const bakeries = await bakeryService.getBakeries();
  console.log('🌟🌟🌟🌟server bakeries: ', bakeries);
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
