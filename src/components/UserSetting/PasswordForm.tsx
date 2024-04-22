import { isFetchBaseQueryError } from '@/Error/helpers';
import { logout } from '@/store/auth/auth.slice';
import { useChangePasswordMutation } from '@/store/auth/authApi.slice';
import { useAppDispatch } from '@/store/hook';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  setShowPasswordForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PasswordForm({ setShowPasswordForm }: Props) {
  const dispatch = useAppDispatch();
  const passwordRef = useRef<HTMLInputElement[] | null[]>([]);
  const [passwordErr, setPasswordErr] = useState('');
  const [changePassword, { isSuccess, error }] = useChangePasswordMutation();
  const passwordSubmitHandler = () => {
    const [oldPassword, newPassword, verifyPassword] = passwordRef.current;

    if (
      oldPassword?.value &&
      newPassword?.value &&
      verifyPassword?.value &&
      newPassword?.value === verifyPassword?.value
    ) {
      changePassword({
        oldPassword: oldPassword.value,
        newPassword: newPassword.value,
        verifyPassword: verifyPassword.value,
      });
      setPasswordErr('');
    } else {
      setPasswordErr('입력하신 비밀번호가 일치하지 않습니다.');
    }
  };
  const passwordHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (isFetchBaseQueryError(error) && error.status === 400) {
      setPasswordErr('사용자 비밀번호가 틀렸습니다.');
    }
  }, [error]);

  return (
    <div className="flex flex-col justify-evenly h-full">
      {isSuccess ? (
        <>
          <h2 className="text-2xl font-bold text-center">변경 완료</h2>
          <Link href="/" className="self-center">
            <button
              type="button"
              className="bg-secondary text-white font-bold text-lg p-2 rounded-x mr-2 rounded-xl"
              onClick={passwordHandler}
            >
              로그인 하러가기
            </button>
          </Link>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold">비밀번호 변경</h2>
          <form className="basis-2/3 ">
            <fieldset className="flex flex-col justify-evenly h-full">
              <input
                ref={(el) => {
                  passwordRef.current[0] = el;
                }}
                id="prePassword"
                type="password"
                placeholder="현재 비밀번호"
                className="border-2 p-2 rounded-md"
              />
              {isFetchBaseQueryError(error) && error.status === 400 && (
                <p className="font-bold text-red-300 text-sm">{passwordErr}</p>
              )}
              <input
                ref={(el) => {
                  passwordRef.current[1] = el;
                }}
                type="password"
                placeholder="새 비밀번호"
                className="border-2 p-2 rounded-md"
              />
              {passwordErr && !isFetchBaseQueryError(error) && (
                <p className="font-bold text-red-300 text-sm">{passwordErr}</p>
              )}
              <input
                ref={(el) => {
                  passwordRef.current[2] = el;
                }}
                type="password"
                placeholder="새 비밀번호 확인"
                className="border-2 p-2 rounded-md"
                onChange={() => {}}
              />
              <p className="self-end">
                <button
                  type="button"
                  className="bg-secondary text-white font-bold text-lg p-2 rounded-x mr-2 rounded-xl"
                  onClick={passwordSubmitHandler}
                >
                  확인
                </button>
                <button
                  onClick={() => setShowPasswordForm(false)}
                  className="bg-secondary text-white font-bold text-lg p-2 rounded-x rounded-xl"
                  type="button"
                >
                  취소
                </button>
              </p>
            </fieldset>
          </form>
        </>
      )}
    </div>
  );
}
