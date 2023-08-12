'use client';
import { useState } from 'react';

import { useSearchParams } from 'next/navigation';
import { useBakery } from '@/hook/swr/useBakery';
import { AvailableBread } from '@/models';

type AvailableBreadItem = AvailableBread & { name: string };

interface Props {}

export function SoldOutBreadsForm({}: Props) {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || '';

  const { bakery, isLoading, updateAvailable } = useBakery(Number(id));
  const sorted = isLoading
    ? []
    : bakery?.breads
        ?.sort((a, b) => Number(b.available) - Number(a.available))
        .map(({ id, name, available }) => ({ id, name, available }));

  const handleSubmit = (available: AvailableBreadItem[]) => {
    updateAvailable(available);
  };

  return (
    <>
      <div className={'px-4 py-6'}>
        <h2 className={'title-28-bold text-gray-700'}>
          빵의 매진 상태를
          <br />
          체크해 주세요
        </h2>
        {!sorted || sorted?.length === 0 ? (
          <></>
        ) : (
          <SwitcSoldoutForm sorted={sorted} id={id} onSubmit={handleSubmit} />
        )}
      </div>
    </>
  );
}

interface SwitcSoldoutFormProps {
  sorted: AvailableBreadItem[];
  id: string;
  onSubmit: (available: AvailableBreadItem[]) => void;
}
function SwitcSoldoutForm({ sorted, id, onSubmit }: SwitcSoldoutFormProps) {
  const [available, setAvailable] = useState<AvailableBreadItem[]>(sorted);

  const handleClick = (selected: AvailableBreadItem) => {
    const updated = available?.map((item) =>
      item.id === selected.id ? { ...item, available: !item.available } : item,
    );
    setAvailable(updated);
  };

  return (
    <form>
      <ul className={`mt-6 tag-container h-[calc(100%-132px)]`}>
        {available?.map((item, index) => (
          <li key={index}>
            <BreadSwitch item={item} onClick={handleClick} />
          </li>
        ))}
      </ul>
      <div className={'absolute bottom-0 left-0 right-0 p-4'}>
        <button
          className={
            'btn border-0 w-full bg-primary-800 disabled:bg-primary-500 text-white'
          }
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            onSubmit(available);
          }}
        >
          완료
        </button>
      </div>
    </form>
  );
}

interface BreadSwitchProps {
  item: AvailableBreadItem;
  onClick: (item: AvailableBreadItem) => void;
}
function BreadSwitch({ item, onClick }: BreadSwitchProps) {
  const { available, id, name } = item;

  const handleClick = () => {
    onClick(item);
  };

  return (
    <button type='button'>
      <div className={available ? 'tag' : 'tag-inactive'} onClick={handleClick}>
        {name}
      </div>
    </button>
  );
}
