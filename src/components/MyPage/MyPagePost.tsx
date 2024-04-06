import React, { useState } from 'react';
import Image from 'next/image';
import { TravelPostType } from '@/types/TravelType';
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type Props = {
  myPost: Pick<TravelPostType, 'title' | 'scheduleId' | 'createdAt'>;
};

export default function MyPagePost({ myPost }: Props) {
  const [showOption, setShowOption] = useState(false);
  return (
    <div
      className="justify-self-center w-[20rem] flex flex-col justify-between py-[1rem]
    h-[15rem] cursor-pointer rounded-[10rem] mb-4 relative group"
      onMouseLeave={() => {
        setShowOption(false);
      }}
    >
      <Link href={`/travelPostDetail/${myPost.scheduleId}`}>
        <Image
          src="https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck="
          fill
          alt="123"
          className="object-cover rounded-xl"
        />
      </Link>

      <div className="hidden group-hover:block absolute w-12 top-1 right-1">
        <EllipsisHorizontalCircleIcon
          className=" text-white"
          onClick={(e) => {
            e.stopPropagation();
            setShowOption((pre) => !pre);
          }}
        />
        {showOption && (
          <div className="bg-white text-center rounded-md font-medium ">
            <p className="py-2 hover:bg-secondary hover:text-white rounded-t-md">
              수정
            </p>
            <p className="py-2 hover:bg-secondary hover:text-white rounded-b-md">
              삭제
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
