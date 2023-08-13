'use client';

import { useState } from 'react';

import type { OpeningHour } from '@/models';
import { sortDayOfWeek } from '@/utils/format';
import { ChevronDownIcon, ChevronUpIcon } from '@/components/ui';

interface Props {
  openingHours: OpeningHour[];
}

export function OpeningHours({ openingHours }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const sorted = sortDayOfWeek(openingHours);

  return (
    <section
      className={`flex gap-1 overflow-hidden ${isOpen ? 'h-full' : 'h-[20px]'}`}
    >
      <ul>
        {sorted.map(({ name, open, close }, index) => (
          <li key={index}>
            {name}
            <span className={'ml-[3px]'}>
              {open} - {close}
            </span>
          </li>
        ))}
      </ul>
      <div className={'mt-auto pb-[3px]'}>
        {isOpen ? (
          <button className='flex-center' onClick={toggle}>
            <ChevronUpIcon className={iconClass} />
          </button>
        ) : (
          <button className='flex-center ' onClick={toggle}>
            <ChevronDownIcon className={iconClass} />
          </button>
        )}
      </div>
    </section>
  );
}

const iconClass = 'w-3.5 h-3.5 text-gray-700';
