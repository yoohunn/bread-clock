import { SearchHeader } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { SearchList } from '@/components/SearchList';
import { bakeryService } from '@/services/bakery';

export const revalidate = 100;

export default async function SearchPage() {
  const bakeries = await bakeryService.getBakeries();

  return (
    <main className={'h-full'}>
      <SearchHeader />
      <SearchList fallback={bakeries} />
      <BottomNav />
    </main>
  );
}
