import Link from 'next/link';

import { LogoIcon, Pattern } from '@/components/ui';
import { GoogleButton } from '@/components/GoogleButton';

export default function Page() {
  return (
    <main className={'h-full bg-primary-800'}>
      <Pattern className={'w-full h-full'} />
      <div className={'absolute inset-0 flex-col-center '}>
        <div className={'flex-1 pt-[202px]'}>
          <LogoIcon className={'w-[160px] h-[54.4px] text-white'} />
        </div>
        <div className={'px-10 py-4 w-full space-y-2.5'}>
          <GoogleButton />
          <Link href={'/search'} className={'btn-white'}>
            <span>그냥 둘러 보기</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
