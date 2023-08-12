import { BottomNav } from '@/components/BottomNav';
import { SearchHeader } from '@/components/Header';
import { BakeryList } from '@/components/BakeryList';
import Link from 'next/link';
import { FavoriteList } from '@/components/FavoriteList';

export default function FavoritePage() {
  return (
    <main className={'h-full flex flex-col'}>
      <SearchHeader />
      <FavoriteList />
      <BottomNav />
    </main>
  );
}
