export function BakeryList() {
  const bakeryList = [{ id: 3298442 }, { id: 2103981 }];
  return (
    <ul>
      {bakeryList.map((i) => (
        <li key={i.id}>{i.id}</li>
      ))}
    </ul>
  );
}
