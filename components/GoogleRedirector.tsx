'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { useUser } from '@/hook/swr/useUser';

export function GoogleAuthRedirector() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') || '';

  const { signIn } = useUser();

  useEffect(() => {
    signIn(code);
  }, [signIn, code]);

  return (
    <section className='flex-1 flex-center py-20'>
      <div className='mx-auto animate-spin ease-linear rounded-full h-6 w-6 border-[3px] border-t-[3px] border-gray-300 border-t-white' />
    </section>
  );
}
