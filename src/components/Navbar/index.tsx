'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function Navbar() {
  const searchParam = useSearchParams();
  const modal = searchParam.get('modal');
  return (
    <nav
      className={`${modal ? 'top-0' : ''}   w-full bg-white flex items-center justify-between px-6 py-4 text-blue-600 shadow-nav z-30 h-[4.5rem]`}
    >
      <Link href="/" className="text-3xl   font-extrabold">
        weShare
      </Link>
      <div className="flex items-center text font-bold [&>*:first-child]:mr-8 ">
        <Link href="/travelEdit" className="">
          여행 쓰기
        </Link>
        <Link href="?modal=true">
          <button
            type="button"
            className="bg-blue-100 px-4  py-2  rounded align-bottom"
          >
            로그인
          </button>
        </Link>
      </div>
    </nav>
  );
}
