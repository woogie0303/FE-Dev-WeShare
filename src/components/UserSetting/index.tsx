'use client';

import { UserIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import PasswordForm from './PasswordForm';

export default function UserSetting() {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  return (
    <div className="bg-white w-[20rem] h-[30rem] px-8 rounded-xl border-2">
      {showPasswordForm ? (
        <PasswordForm setShowPasswordForm={setShowPasswordForm} />
      ) : (
        <div className="flex flex-col justify-evenly h-full items-center">
          {/* UserField */}
          <div className="flex font-bold p-3 items-center gap-4 self-center">
            <div className="bg-secondary rounded-full w-14 p-2">
              <UserIcon className="w-full text-white" />
            </div>
            <p className="text-2xl">강동욱</p>
          </div>
          <div className="w-full">
            <div className="flex mb-5 justify-between items-center">
              <p className="text-lg font-bold">닉네임</p>
              <button
                type="button"
                className="bg-secondary text-white font-bold text-lg p-2 rounded-xl"
              >
                변경
              </button>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">비밀번호</p>
              <button
                type="button"
                className="bg-secondary text-white font-bold text-lg p-2 rounded-xl"
                onClick={() => setShowPasswordForm(true)}
              >
                변경
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
