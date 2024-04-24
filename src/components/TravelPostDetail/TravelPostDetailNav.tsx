/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { PlaceItemType, DayDetailType } from '@/types/TravelType';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const MAX_PAGE = 3;

type Props = {
  currentPageArr: DayDetailType<PlaceItemType>[];
  currentPage: number;
  handlePrevPagination: () => void;
  handleNextPagination: () => void;
  handleOnClickPagination: (index: number) => void;
};

export default function TravelPostDetailNav({
  handlePrevPagination,
  currentPageArr,
  currentPage,
  handleNextPagination,
  handleOnClickPagination,
}: Props) {
  return (
    <div className="flex justify-center items-center mb-6 gap-2 ">
      <ChevronLeftIcon
        className="w-8 text-third cursor-pointer hover:bg-secondary rounded-xl p-1"
        onClick={handlePrevPagination}
      />
      <ul className="flex">
        {currentPageArr.map((currentDay, index) => {
          const dayNum =
            Math.floor(currentPage / MAX_PAGE) * MAX_PAGE + index + 1;
          return (
            <li
              className={`font-bold cursor-pointer py-1 text-center border-b-4 ${currentPage === dayNum - 1 ? 'border-b-[#508AFF] text-[#508AFF]' : 'text-third border-gray-200'} px-3`}
              key={`${currentDay.travelDate}`}
              onClick={() => {
                handleOnClickPagination(index);
              }}
            >
              <p className="">{dayNum}일 차</p>
              <p className="text-xs">
                {currentDay.totalDayPrice?.toLocaleString()} 원
              </p>
            </li>
          );
        })}
      </ul>
      <ChevronRightIcon
        className="w-8 text-third cursor-pointer hover:bg-secondary rounded-xl p-1"
        onClick={handleNextPagination}
      />
    </div>
  );
}
