import React from 'react';

type Props = {
  setShowPasswordForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PasswordForm({ setShowPasswordForm }: Props) {
  return (
    <div className="flex flex-col justify-evenly h-full">
      <h2 className="text-2xl font-bold">비밀번호 변경</h2>
      <form className="basis-2/3 ">
        <fieldset className="flex flex-col justify-evenly h-full">
          <input
            id="prePassword"
            type="password"
            placeholder="현재 비밀번호"
            className="border-2 p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="새 비밀번호"
            className="border-2 p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="새 비밀번호 확인"
            className="border-2 p-2 rounded-md"
          />
          <p className="self-end">
            <button
              type="button"
              className="bg-secondary text-white font-bold text-lg p-2 rounded-x mr-2 rounded-xl"
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
    </div>
  );
}
