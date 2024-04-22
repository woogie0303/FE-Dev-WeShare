import { UserCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

export default function UserInfo() {
  return (
    <div className="text-center p-10">
      <UserCircleIcon className="w-[10rem] font-bold mx-auto text-third" />
      <p className="my-3 cursor-default font-bold text-3xl text-primary">
        강동욱
      </p>
      <Link href="./myPage/setting" scroll={false}>
        <button
          type="button"
          className="bg-secondary text-white p-2 rounded-lg"
        >
          프로필 수정
        </button>
      </Link>
    </div>
  );
}
