'use client';

import { FormEventHandler, useRef } from 'react';
import { LoginFormType } from '@/types/LoginType';
import SignUpInput, { InputHandler } from './SignUpInput';
import DuplicateCheckInput from './DuplicateCheckInput';
import SignUpSuccess from './SignUpSuccess';

type Props = {
  isSuccess: boolean;
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  onSignUpSubmit: (
    credential: Record<keyof LoginFormType, string | undefined>,
  ) => void;
};

export default function SignUp({
  setShowSignIn,
  isSuccess,
  onSignUpSubmit,
}: Props) {
  const userNameInputRef = useRef<InputHandler>(null);
  const emailInputRef = useRef<InputHandler>(null);
  const passwordInputRef = useRef<InputHandler>(null);
  const birthInputRef = useRef<InputHandler>(null);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    onSignUpSubmit({
      email: emailInputRef.current?.getInputValue(),
      password: passwordInputRef.current?.getInputValue(),
      birthDate: birthInputRef.current?.getInputValue(),
      userName: userNameInputRef.current?.getInputValue(),
    });
  };

  // 나중에 모달창 할때 구현 지금은 회원가입 완료 되었다가 다시 로그인하러가기 한 다음에 회원가입 들어가면 성공되었다는 창만 나옴 모달창 패턴정리후 고쳐야함
  return isSuccess ? (
    <SignUpSuccess setShowSignIn={setShowSignIn} />
  ) : (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex w-[25rem] flex-col items-center justify-between rounded-[4rem] border-2 border-solid px-10 py-10"
    >
      <h1 className="mb-6 text-2xl font-bold ">회원가입</h1>
      <h2 className="text-1xl mb-8 font-semibold text-gray-400">
        <span className="mx-1 text-blue-500">WE,</span> 저희와 함께해요
      </h2>
      <fieldset className="w-[20rem]">
        <DuplicateCheckInput
          type="userName"
          labelName="닉네임"
          errMsg="유저 네임은 3~20글자 입니다"
          ref={userNameInputRef}
        />
        <DuplicateCheckInput
          type="email"
          labelName="이메일"
          errMsg="이메일 형식에 맞지 않습니다"
          ref={emailInputRef}
        />
        <SignUpInput
          type="password"
          labelName="비밀번호"
          errMsg="비밀번호는 8~12자리 입니다"
          ref={passwordInputRef}
        />
        <SignUpInput
          type="birth"
          labelName="생년월일"
          errMsg="올바른 형식이 아닙니다"
          ref={birthInputRef}
        />
      </fieldset>
      <button
        type="submit"
        className="bg-blue-500 mb-6 mt-8 h-10 w-[10rem] rounded-3xl leading-8 text-white transition duration-500 ease-in-out"
      >
        완료
      </button>
    </form>
  );
}
