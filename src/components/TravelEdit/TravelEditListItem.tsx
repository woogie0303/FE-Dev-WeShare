import Image from 'next/image';
import React from 'react';

type Props = {
  activeVisitPlace: EditListItem;
};

export default function TravelEditListItem({ activeVisitPlace }: Props) {
  return (
    <div className=" flex mx-8 p-4 gap-4 mb-6  shadow-travelEditItem items-center rounded-lg">
      {/* image */}
      <div className="relative w-[6rem] h-[5rem] ">
        <Image
          src="https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck="
          alt="hi"
          fill
          className=" object-cover rounded-lg"
        />
      </div>
      {/* Detail */}
      <div className="w-full font-bold">
        <div className="flex justify-between mb-4">
          <p>{activeVisitPlace.title}</p>
          <p>{activeVisitPlace.time}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{activeVisitPlace.expense}원</p>
          <div className="">
            <button
              type="button"
              className="px-2 py-1 bg-gray-300 rounded-md mr-2"
            >
              수정
            </button>
            <button type="button" className="px-2 py-1 bg-gray-300 rounded-md">
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
