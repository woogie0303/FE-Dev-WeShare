import Image from 'next/image';
import React, { forwardRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  UserIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';
import { TravelPostType } from '@/types/TravelType';

type Props = {
  post: TravelPostType;
};

export default forwardRef<HTMLDivElement, Props>(function TravelPost(
  { post },
  ref,
) {
  return (
    <div
      ref={ref}
      className="justify-self-center w-[80%] flex flex-col justify-between py-[1rem]"
    >
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
  );
});
