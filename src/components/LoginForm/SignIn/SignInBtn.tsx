import ErrorMessage from '@/Error/ErrorMessage';
import React from 'react';

type Props = {
  showErrMsg: boolean;
};

export default function SignInBtn({ showErrMsg }: Props) {
  return (
    <>
      <ErrorMessage
        isError={showErrMsg}
        errMessage="아이디 또는 비밀번호를 다시 확인해주세요"
        errClass="text-sm mt-5 font-semibold"
      />

      <button
        type="submit"
        className="bg-blue-500 mb-6  mt-10 h-10 w-[10rem] rounded-3xl text-white "
      >
        Login
      </button>
    </>
  );
}
