import { BakeryItem } from '@/components/BakeryItem';
import { Loading } from '@/components/Loading';
import Link from 'next/link';

interface Props extends WithClassName, WithChildren {}
export function BakeryList({ className, children }: Props) {
  const bakeryList = [
    { id: 3298442 },
    { id: 2103981 },
    { id: 32442 },
    { id: 21031 },
  ];
  return (
    <ul
      className={`mt-4 p-4 overflow-scroll flex flex-col gap-4 flex-1 hide-scrollbar ${className}`}
    >
      {bakeryList.map((i) => (
        <li key={i.id}>
          <Link href={`/bakery/${i.id}`}>
            <BakeryItem />
          </Link>
        </li>
      ))}
      {children}
    </ul>
  );
}
