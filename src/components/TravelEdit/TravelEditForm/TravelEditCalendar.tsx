import { useTravelScheduleContext } from '@/contexts/TravelScheduleContext';
import { DateRangeType, RangePicker, dayjs } from '@/utils/dayjs';
import { XMarkIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react';

export default function TravelEditCalendar() {
  const { travelScheduleArr, setActiveVisitDate, setTravelScheduleArr } =
    useTravelScheduleContext();
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

    setTravelScheduleArr(dateInRange);
    setActiveVisitDate(dateInRange[0].travelDate);
    setShowCalendar(false);
  };

  useEffect(() => {
    if (travelScheduleArr.length > 0) {
      setShowCalendar(false);
    }
  }, [travelScheduleArr]);

  return showCalendar ? (
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
      <p>{travelScheduleArr && travelScheduleArr[0].travelDate}</p>
      <p className="">~</p>
      <p>
        {travelScheduleArr &&
          travelScheduleArr[travelScheduleArr.length - 1].travelDate}
      </p>
      <XMarkIcon
        className="w-5 cursor-pointer"
        onClick={() => {
          setShowCalendar(true);
        }}
      />
    </div>
  );
}
