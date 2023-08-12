import { Bread } from '@/models';

interface Props extends WithClassName {
  itemClassName?: string;
  breads: Bread[];
}

export function BreadTagList({ breads, className, itemClassName }: Props) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {breads?.map((i, index) => (
        <li key={index}>
          <div
            className={`px-2.5 py-2 rounded-xl flex-center body-15-semibold bg-white text-gray-700 ${itemClassName}`}
          >
            {i.name}
          </div>
        </li>
      ))}
    </ul>
  );
}
