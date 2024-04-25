/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
import { UserActivityType } from '@/types/TravelType';

type Props = {
  setCommentIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userActivity: UserActivityType;
};

export default function TravelFeedback({
  setCommentIsOpen,
  userActivity,
}: Props) {
  return (
    <div className="flex justify-between items-center font-bold text-primary mt-5">
      <div className="flex">
        <UserIcon className="w-6" />
        <p>{userActivity.userName}</p>
      </div>
      <div className="flex gap-1">
        <div className="flex cursor-pointer">
          <HeartIcon className="w-6 cursor-pointer" />
          <p>{userActivity.likeCount}</p>t
        </div>
        <div
          className="flex cursor-pointer"
          onClick={() => setCommentIsOpen((pre) => !pre)}
        >
          <ChatBubbleBottomCenterTextIcon className="w-6 cursor-pointer" />
          <p>{userActivity.commentCount}</p>
        </div>
      </div>
    </div>
  );
}
