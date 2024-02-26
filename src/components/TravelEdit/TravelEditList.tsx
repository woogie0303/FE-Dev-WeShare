'use client';

import React from 'react';
import {
  PlusIcon,
  TrashIcon,
  PaperAirplaneIcon,
  BookmarkSquareIcon,
} from '@heroicons/react/24/outline';
import TravelEditListItem from './TravelEditListItem';

export default function TravelEditList() {
  return (
    <div className="border-third border-2 mt-4 px-2 py-4  h-full">
      {/* Day Nav */}
      <div className="flex justify-between items-center px-2 text-lg mb-8 font-bold">
        <div className="flex gap-4 text-third">
          <li className="text-[#508AFF] border-b-[6px]  border-[#508AFF] cursor-pointer">
            1일차
          </li>
          <li className="cursor-pointer">2일차</li>
          <li className="cursor-pointer">3일차</li>
        </div>
        <div className="flex gap-2 text-primary">
          <PlusIcon className="w-24 cursor-pointer" />
          <TrashIcon className="cursor-pointer" />
          <BookmarkSquareIcon className="cursor-pointer" />
          <PaperAirplaneIcon className="cursor-pointer" />
        </div>
      </div>
      {/* Day Travel Edit ListItem */}
      <div className="">
        <TravelEditListItem />
      </div>
    </div>
  );
}
