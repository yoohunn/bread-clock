import Link from 'next/link';

import { LogoIcon } from '@/components/ui';
import { OpenBottomDrawer } from '@/components/OpenBottomDrawer';
import { GoogleButton } from '@/components/GoogleButton';

export default function Page() {
  return (
    <main className={'h-full flex-col-center'}>
      <div className={'flex-1 pt-[202px]'}>
        <LogoIcon className={'w-[160px] h-[54.4px]'} />
      </div>
      <div className={'px-10 py-4 w-full space-y-2.5'}>
        <OpenBottomDrawer buttonNode={<GoogleButton />}>
          <h2 className={'title-22-bold text-gray-900'}>구글로 시작하기</h2>
          <button className={'btn w-full'}>구글로 고르인</button>
        </OpenBottomDrawer>
        <Link href={'/search'} className={'btn-white'}>
          <span>그냥 둘러 보기</span>
        </Link>
      </div>
    </main>
  );
}
