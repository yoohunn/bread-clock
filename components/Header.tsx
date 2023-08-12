import Link from 'next/link';

import { LogoIcon } from '@/components/ui';
import { UserButton } from '@/components/UserButton';

export function SearchHeader() {
  return (
    <header className='pt-4 px-4 h-16 flex-row-center justify-between'>
      <Link href={'/'}>
        <LogoIcon className={'w-20 h-[27px] text-primary-800'} />
      </Link>
      <UserButton />
    </header>
  );
}
