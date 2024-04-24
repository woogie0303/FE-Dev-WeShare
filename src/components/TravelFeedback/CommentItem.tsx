import { TravelCommentType } from '@/types/TravelType';
import { UserIcon } from '@heroicons/react/24/solid';
import React from 'react';

type Props = {
  commentItem: TravelCommentType;
};

export default function CommentItem({ commentItem }: Props) {
  return (
    <div className="flex items-start bg-third mb-6 p-3 rounded-3xl text-secondary">
      <div className="">
        <UserIcon className="w-10 text-primary" />
      </div>
      <div className="px-5">
        <p className="font-bold text-primary mb-3">
          {commentItem.commenterName}
        </p>
        <p>{commentItem.content}</p>
      </div>
    </div>
  );
}
