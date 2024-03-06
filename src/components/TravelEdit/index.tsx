'use client';

import React, { useState } from 'react';
import {
  PlusIcon,
  TrashIcon,
  PaperAirplaneIcon,
  BookmarkSquareIcon,
} from '@heroicons/react/24/outline';
import { DateRangeType, RangePicker, dayjs } from '@/utils/dayjs';
import TravelEditListItem from './TravelEditListItem';

export default function TravelEdit() {
  const [visitDates, setVisitDates] =
    useState<VisitDatesType<EditListItem>[]>();
  const [activeVisitDate, setActiveVisitDate] = useState<string>();

  const handleDateRange = (values: DateRangeType) => {
    const startDate = dayjs(values[0]);
    const endDate = dayjs(values[1]);

    let currentDate = startDate;
    const dateInRange = [];
    while (currentDate.isSameOrBefore(endDate)) {
      const dateToString = currentDate.format('YYYY-MM-DD');
      dateInRange.push({ travelDate: dateToString, visitPlaces: undefined });
      currentDate = currentDate.add(1, 'day');
    }
    setVisitDates(dateInRange);
    setActiveVisitDate(dateInRange[0].travelDate);
  };

  return (
    <div className="basis-1/2 ">
      <form className="basis-1/2 flex flex-col h-full ">
        <input
          type="text"
          className="border-secondary border-b-2 text-2xl  mb-5 py-1 placeholder:text-third "
          placeholder="여행 제목을 입력해주세요"
        />
        <RangePicker
          placeholder={['출발', '도착']}
          size="middle"
          className="w-[20rem]"
          onChange={(values) => {
            handleDateRange(values);
          }}
        />

        {/* Day Travel Edit List */}
        {visitDates && activeVisitDate && (
          <div className="border-third border-2 mt-4 px-2 py-4  h-full">
            {/* Day Nav */}
            <div className="flex justify-between items-center px-2 text-lg mb-8 font-bold">
              <div className="flex gap-4 text-third">
                {visitDates.map((visitDate, i) => (
                  <li
                    className={`${activeVisitDate === visitDate.travelDate ? 'text-[#508AFF] border-b-[6px]  border-[#508AFF]' : ''} cursor-pointer`}
                  >
                    {i + 1}일차
                  </li>
                ))}
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
        )}
      </form>
    </div>
  );
}
