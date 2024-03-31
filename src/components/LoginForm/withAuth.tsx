'use client';

import { selectToken } from '@/store/auth/auth.slice';
import { useAppSelector } from '@/store/hook';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const accessToken = useAppSelector(selectToken);
    const router = useRouter();

    useEffect(() => {
      if (!accessToken) {
        router.push('/login', { scroll: false });
      }
    }, [accessToken, router]);

    if (!accessToken) {
      return null;
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };
}
