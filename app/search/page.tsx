import { SearchBar } from '@/components/SearchBar';
import { BakeryList } from '@/components/BakeryList';
import { SearchHeader } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { Loading } from '@/components/Loading';
import { bakeryService } from '@/services/bakery';
import { SearchList } from '@/components/SearchList';

export default async function SearchPage() {
  return (
    <main className={'h-full'}>
      <SearchHeader />
      <SearchList />
      <BottomNav />
    </main>
  );
}
