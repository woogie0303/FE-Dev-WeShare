import { useEffect, useRef, useState } from 'react';

import SignInInput from './SignInInput';
import SignInBtn from './SignInBtn';
import OAuthBtnContainer from './OAuthBtnContainer';

type Props = {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  onSignInSubmit: (email: string, password: string) => void;
  isError: boolean;
};

export default function SignIn({
  setShowSignIn,
  onSignInSubmit,
  isError,
}: Props) {
  const [showErrMsg, setShowErrMsg] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isError) {
      emailInputRef.current?.focus();
      setShowErrMsg(true);
    }
  }, [isError]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSignInSubmit(
          emailInputRef.current!.value,
          passwordInputRef.current!.value,
        );
      }}
      className="w-[25rem] h-[40rem] rounded-[4rem] border-2 border-solid  bg-white mx-auto text-s flex flex-col items-center justify-evenly px-6 py-8"
    >
      <h1 className="mb-6 text-3xl font-bold">Login</h1>
      <h2 className="text-1xl mb-6 mt-3 font-semibold text-gray-400">
        여러분의 광고를 <span className="mx-1 text-blue-500">SHARE</span>
        해보세요
      </h2>
      <SignInInput ref={emailInputRef} isError={isError} title="Email" />
      <SignInInput ref={passwordInputRef} isError={isError} title="Password" />
      <SignInBtn showErrMsg={showErrMsg} />
      <button
        type="button"
        className="cursor-pointer  text-gray-300 underline hover:text-black"
        onClick={() => setShowSignIn(false)}
      >
        회원가입
      </button>
      <OAuthBtnContainer />
    </form>
  );
}
