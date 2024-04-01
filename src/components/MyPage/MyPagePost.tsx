import React from 'react';
import Image from 'next/image';

export default function MyPagePost() {
  return (
    <div className="justify-self-center w-[20rem] flex flex-col justify-between py-[1rem]">
      <div className="h-[15rem] cursor-pointer rounded-[10rem] mb-4 relative ">
        <Image
          src="https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck="
          fill
          alt="123"
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
