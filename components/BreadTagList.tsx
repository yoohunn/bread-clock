interface Props extends WithClassName {
  itemClassName?: string;
}

export function BreadTagList({ className, itemClassName }: Props) {
  const breadlist = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {breadlist.map((i, index) => (
        <li key={index}>
          <div
            className={`px-2.5 py-2 rounded-xl flex-center body-15-semibold bg-white text-gray-700 ${itemClassName}`}
          >
            빵이름1
          </div>
        </li>
      ))}
    </ul>
  );
}