/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/16/solid';

type Props = {
  setCommentIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TravelFeedback({ setCommentIsOpen }: Props) {
  return (
    <div className="flex justify-between items-center font-bold  text-primary mt-5">
      <div className="flex">
        <UserIcon className="w-6" />
        <p>강동욱</p>
      </div>
      <div className="flex gap-1">
        <div className="flex cursor-pointer">
          <HeartIcon className="w-6 cursor-pointer" />
          <p>10</p>t
        </div>
        <div
          className="flex cursor-pointer"
          onClick={() => setCommentIsOpen((pre) => !pre)}
        >
          <ChatBubbleBottomCenterTextIcon className="w-6 cursor-pointer" />
          <p>20</p>
        </div>
      </div>
    </div>
  );
}
