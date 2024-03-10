'use client';

import React, { useEffect, useState } from 'react';
import {
  PlusIcon,
  TrashIcon,
  PaperAirplaneIcon,
  BookmarkSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { DateRangeType, RangePicker, dayjs } from '@/utils/dayjs';
import TravelEditListItem from './TravelEditListItem';
import TravelEditListItemForm from './TravelEditListItemForm';

export default function TravelEdit() {
  const [visitDatesArr, setVisitDatesArr] =
    useState<VisitDatesType<EditListItem>[]>();
  const [activeVisitDate, setActiveVisitDate] = useState<string>();
  const [activeVisitPlaces, setActiveVisitPlaces] = useState<EditListItem[]>();
  const [showEditForm, setShowEditForm] = useState(false);
  const [showCalendar, setShowCalendar] = useState(true);

  const handleDateRange = (values: DateRangeType) => {
    const startDate = dayjs(values[0]);
    const endDate = dayjs(values[1]);
    const dateInRange = [];
    let currentDate = startDate;

    while (currentDate.isSameOrBefore(endDate)) {
      const dateToString = currentDate.format('YYYY-MM-DD');
      dateInRange.push({ travelDate: dateToString, visitPlaces: [] });
      currentDate = currentDate.add(1, 'day');
    }

    setVisitDatesArr(dateInRange);
    setActiveVisitDate(dateInRange[0].travelDate);
    setShowCalendar(false);
  };

  useEffect(() => {
    if (visitDatesArr && activeVisitDate) {
      const visitPlaces = visitDatesArr.find(
        (visitDate) => visitDate.travelDate === activeVisitDate,
      );

      if (visitPlaces) {
        setActiveVisitPlaces(visitPlaces.visitPlaces);
      }
    }
  }, [activeVisitDate, visitDatesArr]);

  return showEditForm && visitDatesArr && activeVisitDate ? (
    <TravelEditListItemForm
      setVisitDatesArr={setVisitDatesArr}
      activeVisitDate={activeVisitDate}
      visitDatesArr={visitDatesArr}
      setShowEditForm={setShowEditForm}
    />
  ) : (
    <div className="basis-1/2 ">
      <form className="basis-1/2 flex flex-col h-full ">
        <input
          type="text"
          className="border-secondary border-b-2 text-2xl  mb-5 py-1 placeholder:text-third "
          placeholder="여행 제목을 입력해주세요"
        />
        {showCalendar ? (
          <RangePicker
            placeholder={['출발', '도착']}
            size="middle"
            className="w-[20rem]"
            onChange={(values) => {
              handleDateRange(values);
            }}
          />
        ) : (
          <div className="flex text-[#508AFF] font-bold items-center justify-center bg-third w-max gap-2  px-4 py-1 rounded-xl cursor-default ">
            <p>{visitDatesArr && visitDatesArr[0].travelDate}</p>
            <p className="">~</p>
            <p>
              {visitDatesArr &&
                visitDatesArr[visitDatesArr.length - 1].travelDate}
            </p>
            <XMarkIcon
              className="w-5 cursor-pointer"
              onClick={() => {
                setShowCalendar(true);
              }}
            />
          </div>
        )}
        {/* Day Travel Edit List */}
        {visitDatesArr && activeVisitDate && (
          <div className="border-third border-2 mt-4 px-2 py-4  h-full">
            {/* Day Nav */}
            <div className="flex justify-between items-center px-2 text-lg mb-8 font-bold">
              <ul className=" w-[20rem] flex text-center space-x-4 whitespace-nowrap overflow-x-auto  scrollbar-hide">
                {visitDatesArr.map((visitDate, i) => (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
                  <li
                    key={visitDate.travelDate}
                    className={`${activeVisitDate === visitDate.travelDate ? 'text-[#508AFF] border-b-[6px]  border-[#508AFF]' : 'text-third'} cursor-pointer py-1 w-10`}
                    onClick={() => {
                      setActiveVisitDate(visitDate.travelDate);
                    }}
                  >
                    {i + 1}일차
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 text-primary">
                <PlusIcon
                  onClick={() => setShowEditForm(true)}
                  className="w-24 cursor-pointer"
                />
                <TrashIcon className="cursor-pointer" />
                <BookmarkSquareIcon className="cursor-pointer" />
                <PaperAirplaneIcon className="cursor-pointer" />
              </div>
            </div>
            {/* Day Travel Edit ListItem */}
            <div className="h-[25rem] overflow-scroll">
              {activeVisitPlaces &&
                activeVisitPlaces.map((activeVisitPlace) => (
                  <TravelEditListItem
                    key={activeVisitPlace.title}
                    activeVisitPlace={activeVisitPlace}
                  />
                ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}