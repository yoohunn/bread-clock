import { BreadTagList } from '@/components/BreadTagList';
import { Bread } from '@/models';
import { addColonToTime } from '@/utils/format';

interface Props extends WithClassName {
  breads: Bread[];
}

export function BreadTimeList({ breads, className }: Props) {
  const sorted = sortBreads(breads);

  return (
    <section className={'px-4 py-6'}>
      <h3 className={'body-16-bold text-gray-700'}>빵 나오는 시간</h3>
      <ul className={'mt-[11px] space-y-4'}>
        {Array.from(sorted).map(([key, value]) => (
          <li key={key}>
            <BreadTimeItem time={key} breads={value} />
          </li>
        ))}
      </ul>
      {/*<button className={'btn mt-4 w-full'}>더보기</button>*/}
    </section>
  );
}

interface BreadTimeItemProps {
  time: string;
  breads: Bread[];
}
function BreadTimeItem({ time, breads }: BreadTimeItemProps) {
  return (
    <>
      <h4 className={'body-16-bold'}>{addColonToTime(time)}</h4>
      <BreadTagList
        className={'mt-1'}
        itemClassName={'bg-gray-800/10'}
        breads={breads}
      />
    </>
  );
}

function sortBreads(breads: Bread[]) {
  const sorted = new Map<string, Bread[]>();

  breads.forEach((bread) => {
    const hour = bread.availableHours[0];
    if (!sorted.has(hour)) {
      sorted.set(hour, []);
    }
    sorted.get(hour)?.push(bread);
  });

  return sorted;
}
