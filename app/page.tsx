import { SearchBar } from '@/components/SearchBar';
import { BakeryList } from '@/components/BakeryList';

export default function Home() {
  return (
    <main>
      <SearchBar />
      <BakeryList />
    </main>
  );
}
