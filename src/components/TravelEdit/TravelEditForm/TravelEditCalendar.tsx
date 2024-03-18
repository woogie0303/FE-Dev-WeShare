import {
  resetTravelSchedules,
  selectTravelEditDateRange,
  setActiveTravelSchedule,
  setDateRange,
  setTravelSchedules,
} from '@/store/Travel/travelEdit.slice';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { DateRangeType, RangePicker } from '@/utils/dayjs';
import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

export default function TravelEditCalendar() {
  const { startDate, endDate } = useAppSelector(selectTravelEditDateRange);
  const dispatch = useAppDispatch();

  const handleDateRange = (values: DateRangeType) => {
    const startDateToString = values[0]!.format('YYYY-MM-DD');
    const endDateToString = values[1]!.format('YYYY-MM-DD');

    dispatch(setTravelSchedules(values));
    dispatch(setActiveTravelSchedule(startDateToString));
    dispatch(
      setDateRange({ startDate: startDateToString, endDate: endDateToString }),
    );
  };

  return startDate.length && endDate.length ? (
    <div className="flex text-[#508AFF] font-bold items-center justify-center bg-third w-max gap-2  px-4 py-1 rounded-xl cursor-default ">
      <p>{startDate}</p>
      <p className="">~</p>
      <p>{endDate}</p>
      <XMarkIcon
        className="w-5 cursor-pointer"
        onClick={() => {
          dispatch(resetTravelSchedules());
        }}
      />
    </div>
  ) : (
    <RangePicker
      placeholder={['출발', '도착']}
      size="middle"
      className="w-[20rem]"
      onChange={(values) => {
        handleDateRange(values);
      }}
    />
  );
}
