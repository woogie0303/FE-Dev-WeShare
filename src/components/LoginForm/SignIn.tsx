'use client';

import React, { FormEventHandler, useEffect, useState } from 'react';
import useInput from '@/hooks/useInput';
import ErrorMessage from '@/Error/ErrorMessage';
import googleLogo from '@/assets/googleLogo.png';
import kakaoLogo from '@/assets/kakaoLogo.png';
import naverLogo from '@/assets/naverLogo.png';
import { useSignInMutation } from '@/store/auth/authApi.slice';
import { setCredentials } from '@/store/auth/auth.slice';
import { useAppDispatch } from '@/store/hook';
import { isFetchBaseQueryError } from '@/Error/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SignIn({ setShowSignIn }: Props) {
  const [activeSignInBtn, setActiveSignInBtn] = useState<boolean>(false);
  const emailInput = useInput('email');
  const passwordInput = useInput('password');
  const [signIn, { isError }] = useSignInMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn({
        email: emailInput.inputValue,
        password: passwordInput.inputValue,
      }).unwrap();

      if (res.accessToken) {
        router.back();
      }

      dispatch(
        setCredentials({
          userName: res.userName,
          accessToken: res.accessToken,
        }),
      );
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        emailInput.setInputValue('');
        passwordInput.setInputValue('');
        emailInput.inputRef.current?.focus();
      }
    }

    return null;
  };

  useEffect(() => {
    if (
      emailInput.inputValue.length === 0 ||
      passwordInput.inputValue.length === 0
    ) {
      setActiveSignInBtn(false);
    } else {
      setActiveSignInBtn(true);
    }
  }, [emailInput, passwordInput]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[25rem] h-[40rem] rounded-[4rem] border-2 border-solid  bg-white mx-auto text-s flex flex-col items-center justify-evenly px-6 py-8"
    >
      <h1 className="mb-6 text-3xl font-bold">Login</h1>
      <h2 className="text-1xl mb-6 mt-3 font-semibold text-gray-400">
        여러분의 광고를 <span className="mx-1 text-blue-500">SHARE</span>
        해보세요
      </h2>
      <div className="relative mt-6 py-2">
        <label
          className={`absolute left-0  duration-500 ease-in-out ${emailInput.labelClass} `}
          htmlFor="email-field"
        >
          Email
        </label>
        <input
          value={emailInput.inputValue}
          type="text"
          id="email-field"
          onFocus={emailInput.handleFocus}
          onBlur={emailInput.handleFocus}
          onChange={emailInput.handleChange}
          className={`w-[18rem] border-b-2 py-2 ${emailInput.inputClass}`}
          ref={emailInput.inputRef}
        />
      </div>
      <div className="relative mt-6 py-2">
        <label
          className={`pointer-events-none absolute left-0 duration-500 ease-in-out ${passwordInput.labelClass}`}
          htmlFor="password-field"
        >
          Password
        </label>
        <input
          value={passwordInput.inputValue}
          type="password"
          id="password-field"
          onFocus={passwordInput.handleFocus}
          onBlur={passwordInput.handleFocus}
          onChange={passwordInput.handleChange}
          className={`w-[18rem] border-b-2 py-2 ${passwordInput.inputClass}`}
        />
      </div>
      {isError ? (
        <ErrorMessage
          errMessage="아이디 또는 비밀번호를 다시 확인해주세요"
          errClass="text-sm mt-5 font-semibold"
        />
      ) : (
        ''
      )}
      <button
        type="submit"
        disabled={!activeSignInBtn}
        className={`${activeSignInBtn ? 'bg-blue-500' : ''} mb-6  mt-10 h-10 w-[10rem] rounded-3xl bg-blue-200 leading-8 text-white transition duration-500 ease-in-out`}
      >
        Login
      </button>
      <button
        type="button"
        className="cursor-pointer  text-gray-300 underline hover:text-black"
        onClick={() => {
          setShowSignIn(false);
        }}
      >
        회원가입
      </button>
      {/* Another Sign up */}
      <div className="my-8 w-[20rem] border-2" />
      <div className="flex w-[15rem] items-center justify-evenly">
        <Link
          href="process.env.VITE_GOOGLELOGIN_API"
          className=" shadow-oAuthLogo h-10 w-10 p-2"
        >
          <Image alt="google" className="w-full" src={googleLogo} />
        </Link>
        <Link
          href="process.env.VITE_KAKAOLOGIN_API"
          className="shadow-oAuthLogo w-10 bg-[#ffcd00] p-2"
        >
          <Image alt="kakao" className="w-full" src={kakaoLogo} />
        </Link>
        <Link
          href="process.env.VITE_NAVERLOGIN_API"
          className="shadow-oAuthLogo h-10 w-10 "
        >
          <Image alt="naver" className="w-full" src={naverLogo} />
        </Link>
      </div>
    </form>
  );
}
