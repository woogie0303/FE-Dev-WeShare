import { useSignUpMutation } from '@/store/auth/authApi.slice';
import { LoginFormType } from '@/types/LoginType';
import { checkValidSignInput } from '@/utils/LoginForm/checkInputValidation';

export const useSignUp = () => {
  const [signUp, { isSuccess }] = useSignUpMutation();

  const handleSignUp = (
    credential: Record<keyof LoginFormType, string | undefined>,
  ) => {
    const validCredential = checkValidSignInput(credential);

    if (validCredential) {
      signUp({ ...validCredential });
    }
  };

  return { handleSignUp, isSuccess };
};
