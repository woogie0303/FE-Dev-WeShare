'use client';

import { logout, selectToken } from '@/store/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const accessToken = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  return (
    <nav className="fixed w-full bg-white flex items-center justify-between px-6 py-4 text-blue-600 shadow-nav z-30">
      <Link href="/" className="text-3xl font-extrabold">
        weShare
      </Link>
      <div className="flex items-center text font-bold [&>*:first-child]:mr-8 ">
        <Link href="/travelEdit" className="">
          여행 쓰기
        </Link>
        {accessToken ? (
          <button
            type="button"
            className="bg-blue-100 px-4  py-2  rounded align-bottom"
            onClick={() => {
              dispatch(logout());
            }}
          >
            로그아웃
          </button>
        ) : (
          <Link href="/login" scroll={false}>
            <button
              type="button"
              className="bg-blue-100 px-4  py-2  rounded align-bottom"
            >
              로그인
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
