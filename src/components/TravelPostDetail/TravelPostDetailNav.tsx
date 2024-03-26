/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useCurrentPageSection } from '@/hooks/useCurrentPageSection';
import {
  EditListItemType,
  TravelPostDetailDayDetailType,
} from '@/types/TravelType';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

type Props = {
  dayDetail: TravelPostDetailDayDetailType[];
  setActivePostDetailItems: React.Dispatch<
    React.SetStateAction<EditListItemType[]>
  >;
};

export default function TravelPostDetailNav({
  dayDetail,
  setActivePostDetailItems,
}: Props) {
  const {
    handleNextPagination,
    handlePrevPagination,
    currentPage,
    currentPageArr,
    setCurrentPage,
  } = useCurrentPageSection(dayDetail);

  useEffect(() => {
    setActivePostDetailItems(dayDetail[currentPage - 1].places);
  }, [currentPage, dayDetail, setActivePostDetailItems]);

  return (
    <div className="flex justify-center items-center mb-6 gap-2 ">
      <ChevronLeftIcon
        className="w-8 text-third cursor-pointer hover:bg-secondary rounded-xl p-1"
        onClick={handlePrevPagination}
      />
      <ul className="flex">
        {currentPageArr.map((currentDay) => {
          return (
            <li
              className={`font-bold cursor-pointer py-1 text-center border-b-4 ${currentPage === currentDay.numDate ? 'border-b-[#508AFF] text-[#508AFF]' : 'text-third border-gray-200'} px-3`}
              key={`${currentDay.travelDate}`}
              onClick={() => {
                setCurrentPage(currentDay.numDate);
              }}
            >
              <p className="">{currentDay.numDate}일 차</p>
              <p className="text-xs">
                {currentDay.totalDayPrice.toLocaleString()} 원
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
