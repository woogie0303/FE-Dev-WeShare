'use client';

import { logout, selectToken } from '@/store/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import Link from 'next/link';
import React, { useState } from 'react';
import Category from '../Category';

export default function Navbar() {
  const accessToken = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  const [openFilter, setOpenFilter] = useState(true);

  return (
    <div className="fixed w-full z-30">
      <nav className="w-full bg-white flex items-center justify-between px-6 py-4 text-blue-600 shadow-nav ">
        <Link href="/" className="text-3xl font-extrabold">
          weShare
        </Link>
        <div className="flex items-center text font-bold gap-6">
          <button
            type="button"
            className="bg-blue-100 px-4  py-2  rounded align-bottom"
            onClick={() => {
              setOpenFilter((pre) => !pre);
            }}
          >
            필터
          </button>
          <Link href="/travelEdit/edit" className="">
            여행 쓰기
          </Link>
          <Link href="/myPage" className="">
            마이페이지
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
      {openFilter && <Category />}
    </div>
  );
}
