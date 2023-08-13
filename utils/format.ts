import { OpeningHour, DaysOfWeek } from '@/models';

export function addColonToTime(time: string) {
  const hours = time.slice(0, 2);
  const minutes = time.slice(2, 4);

  return `${hours}:${minutes}`;
}

export function sortDayOfWeek(hours: OpeningHour[]): DaysOfWeek[] {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const combined: DaysOfWeek[] = daysOfWeek.map((day, index) => ({
    name: day,
    close: addColonToTime(hours[index].close),
    open: addColonToTime(hours[index].open),
  }));

  const currentDaysOfWeek = new Date().getDay();

  return [
    ...combined.slice(currentDaysOfWeek),
    ...combined.slice(0, currentDaysOfWeek),
  ];
}
