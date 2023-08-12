import type { OpeningHour } from '@/models';
import { addColonToTime } from '@/utils/format';

interface Props {
  openingHours: OpeningHour[];
}

export function OpeningHours({ openingHours }: Props) {
  return (
    <ul>
      {openingHours.map(({ open, close }, index) => (
        <li key={index}>
          목{' '}
          <span className={'ml-[3px]'}>
            {addColonToTime(open)} - {addColonToTime(close)}
          </span>
        </li>
      ))}
    </ul>
  );
}
