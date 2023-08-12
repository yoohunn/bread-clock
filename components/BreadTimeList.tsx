import { BreadTagList } from '@/components/BreadTagList';

export function BreadTimeList({ className }: WithClassName) {
  const times = [{ time: '8:00' }, { time: '9:00' }, { time: '10:00' }];
  return (
    <section className={'px-4 py-6'}>
      <h3 className={'body-16-bold text-gray-700'}>빵 나오는 시간</h3>
      <ul className={'mt-[11px] space-y-4'}>
        {times.map((i) => (
          <li key={i.time}>
            <BreadTimeItem time={i.time} />
          </li>
        ))}
      </ul>
      <button className={'btn mt-4 w-full'}>더보기</button>
    </section>
  );
}

interface BreadTimeItemProps {
  time: string;
}
function BreadTimeItem({ time }: BreadTimeItemProps) {
  return (
    <>
      <h4 className={'body-16-bold'}>{time}</h4>
      <BreadTagList className={'mt-1'} itemClassName={'bg-gray-800/10'} />
    </>
  );
}
