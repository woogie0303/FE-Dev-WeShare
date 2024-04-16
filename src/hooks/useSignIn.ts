import { setCredentials } from '@/store/auth/auth.slice';
import { useSignInMutation } from '@/store/auth/authApi.slice';
import { useAppDispatch } from '@/store/hook';
import { AuthStateType } from '@/types/LoginType';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const useSignIn = () => {
  const [signIn, { isError }] = useSignInMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const successSignInHandler = useCallback(
    (res: AuthStateType) => {
      dispatch(
        setCredentials({
          userName: res.userName,
          accessToken: res.accessToken,
        }),
      );

      router.back();
    },
    [dispatch, router],
  );

  const handleSubmit = async (email: string, password: string) => {
    const res = await signIn({
      email,
      password,
    }).unwrap();

    successSignInHandler(res);
  };

  return {
    handleSubmit,
    isError,
  };
};

export { useSignIn };
