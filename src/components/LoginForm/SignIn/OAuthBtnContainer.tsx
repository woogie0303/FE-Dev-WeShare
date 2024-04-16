import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import googleLogo from '@/assets/googleLogo.png';
import kakaoLogo from '@/assets/kakaoLogo.png';
import naverLogo from '@/assets/naverLogo.png';

export default function OAuthBtnContainer() {
  return (
    <div className="flex w-2/3 items-center justify-evenly border-t-2 mt-2 py-4">
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
  );
}
