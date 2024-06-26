import Image from 'next/image';
import React, { forwardRef } from 'react';
import {
  UserIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';
import { TravelPostType } from '@/types/TravelType';
import Link from 'next/link';

type Props = {
  post: TravelPostType;
};

export default forwardRef<HTMLDivElement, Props>(function TravelPost(
  { post },
  ref,
) {
  return (
    <Link
      href={`/travelPostDetail/${post.scheduleId}`}
      className="flex justify-center"
    >
      <div ref={ref} className=" w-[80%] flex flex-col  py-[1rem]">
        <div className="h-[15rem] cursor-pointer rounded-[10rem] mb-4 relative ">
          <Image
            src="https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck="
            fill
            alt={post.userName}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center font-bold  text-primary">
          {/* User */}
          <div className="flex">
            <UserIcon className="w-6" />
            <p>{post.userName}</p>
          </div>
          {/* Like, Comment */}
          <div className="flex gap-1">
            <HeartIcon className="w-6" />
            <p>{post.likesCount}</p>
            <ChatBubbleBottomCenterTextIcon className="w-6" />
            <p>{post.commentsCount}</p>
          </div>
        </div>
      </div>
    </Link>
  );
});
