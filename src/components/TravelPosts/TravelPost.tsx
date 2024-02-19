import Image from 'next/image';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  UserIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

type Props = {
  post: TPosts;
};

export default function TravelPost({ post }: Props) {
  return (
    <div className="justify-self-center w-[80%] flex flex-col justify-between first:row-span-2  last:col-start-4 last:row-start-1 last:row-span-2   overflow-hidden">
      <div className="h-full bg-orange-400 rounded-[10rem] mb-4 relative ">
        <Image
          src={post.imageUrl}
          fill
          alt={post.title}
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex justify-between items-center font-bold  text-primary">
        {/* User */}
        <div className="flex">
          <UserIcon className="w-6" />
          <p>{post.user.id}</p>
        </div>
        {/* Like, Comment */}
        <div className="flex gap-1">
          <HeartIcon className="w-6" />
          <p>{post.likeNum}</p>
          <ChatBubbleBottomCenterTextIcon className="w-6" />
          <p>{post.commentNum}</p>
        </div>
      </div>
    </div>
  );
}
