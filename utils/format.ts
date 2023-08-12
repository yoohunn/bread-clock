export function addColonToTime(time: string) {
  const hours = time.slice(0, 2);
  const minutes = time.slice(2, 4);

  return `${hours}:${minutes}`;
}
