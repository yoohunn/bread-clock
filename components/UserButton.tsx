'use client';

import { UserCircleIcon } from '@/components/ui';
import { GoogleButton } from '@/components/GoogleButton';
import { OpenBottomDrawer } from '@/components/OpenBottomDrawer';

export function UserButton() {
  const user = false;
  return (
    <OpenBottomDrawer
      buttonNode={
        <button>
          <UserCircleIcon className={'w-6 h-6 text-gray-500'} />
        </button>
      }
    >
      {user ? (
        <>
          <h2 className={'title-22-bold text-gray-900'}>
            로그아웃 하시겠어요?
          </h2>
          <button className={'btn-white'}>로그아웃</button>
        </>
      ) : (
        <>
          <h2 className={'title-22-bold text-gray-900'}>
            더 많은 기능을 사용하려면?
          </h2>
          <GoogleButton />
        </>
      )}
    </OpenBottomDrawer>
  );
}