'use client';

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-20  bg-white flex items-center justify-between px-6 py-4 text-blue-600 shadow-nav  ">
      <Link href="/" className="text-3xl   font-extrabold">
        weShare
      </Link>
      <div className="text font-bold [&>*:first-child]:mr-8 ">
        <Link href="/" className="">
          여행 쓰기
        </Link>
        {/* text 높이에 관해서 질문 */}
        <Link href="?modal=true">
          <button
            type="button"
            className="bg-blue-100 px-4 pt-[0.6rem] py-2  rounded align-bottom"
          >
            로그인
          </button>
        </Link>
      </div>
    </nav>
  );
}
