'use client';

import { useCallback, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { googleService } from '@/services/google';

export function GoogleAuthRedirector() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') || '';

  const router = useRouter();

  const signIn = useCallback(async () => {
    const access = await googleService.signIn(code);
    if (access) {
      router.refresh();
      router.push(`/search`);
    }
  }, [code, router]);

  useEffect(() => {
    signIn();
  }, [signIn]);

  return (
    <section className='flex-1 flex-center py-20'>
      <div className='mx-auto animate-spin ease-linear rounded-full h-6 w-6 border-[3px] border-t-[3px] border-gray-300 border-t-white' />
    </section>
  );
}
