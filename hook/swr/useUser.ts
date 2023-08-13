import useSWRImmutable from 'swr/immutable';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import type { User } from '@/models';
import { tokenStorage } from '@/utils/token';
import { googleService } from '@/services/google';

export function useUser() {
  const { data: user, mutate } = useSWRImmutable<User>(
    tokenStorage.access ? '/auth/me' : null,
  );

  const router = useRouter();

  const signIn = useCallback(
    async (code: string) => {
      const access = await googleService.signIn(code);
      if (access) {
        tokenStorage.setAccess(access);
        router.push(`/search`);
        router.refresh();
      }
      mutate();
    },
    [router, mutate],
  );

  return { user, signIn };
}
