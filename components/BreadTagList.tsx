import { Bread } from '@/models';

interface Props extends WithClassName {
  itemClassName?: string;
  breads?: Bread[];
}

export function BreadTagList({ breads, className, itemClassName }: Props) {
  return (
    <ul className={`tag-container ${className}`}>
      {breads?.map((i, index) => (
        <li key={index}>
          <div className={`tag ${itemClassName}`}>{i.name}</div>
        </li>
      ))}
    </ul>
  );
}
