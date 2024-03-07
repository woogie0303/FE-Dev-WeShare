'use client';

import React, { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import TravelPlaceSearch from './TravelPlaceSearch';

type Props = {
  visitDatesArr: VisitDatesType<EditListItem>[];
  activeVisitDate: string;
  setVisitDatesArr: React.Dispatch<
    React.SetStateAction<VisitDatesType<EditListItem>[] | undefined>
  >;
  setShowEditForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TravelEditListItemForm({
  visitDatesArr,
  setVisitDatesArr,
  activeVisitDate,
  setShowEditForm,
}: Props) {
  const [time, setTime] = useState<string>();
  const [selectedPlace, setSelectedPlace] = useState<
    SelectedPlaceType | undefined
  >();
  const costRef = useRef<string>();
  const memoRef = useRef<string>();
  const sendTravelEditListItem = () => {
    if (selectedPlace && time && costRef.current && memoRef.current) {
      const copyVisitDatesArr = visitDatesArr;
      const findTravelDateIndex = visitDatesArr.findIndex(
        (visitDate) => visitDate.travelDate === activeVisitDate,
      );
      const editItemList: EditListItem = {
        title: selectedPlace.title,
        time,
        memo: memoRef.current,
        expense: Number(costRef.current),
        latitude: selectedPlace.latitude,
        longitude: selectedPlace.longitude,
      };

      copyVisitDatesArr[findTravelDateIndex].visitPlaces.push(editItemList);
      copyVisitDatesArr[findTravelDateIndex].visitPlaces.sort((a, b) => {
        const timeRegex = /(\d+):(\d+)\s*(AM|PM)/;
        const preMatch = a.time.match(timeRegex);
        const curMatch = b.time.match(timeRegex);

        const [, preHoursStr, preMinutesStr] = preMatch as RegExpMatchArray;
        const [, curHoursStr, curMinutesStr] = curMatch as RegExpMatchArray;

        const totalPreMin = Number(preHoursStr) * 60 + Number(preMinutesStr);
        const totalCurMin = Number(curHoursStr) * 60 + Number(curMinutesStr);

        return totalPreMin - totalCurMin;
      });

      setVisitDatesArr(copyVisitDatesArr);
    }
    setShowEditForm(false);
  };

  return (
    <form className="bg-third flex flex-col py-4 px-10 basis-1/2 h-full font-bold">
      <TravelPlaceSearch
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
      <p className="mb-2">시간</p>
      <TimePicker
        onChange={(newValue) => {
          if (newValue) {
            const timeFormat = newValue.format('HH:mm A');
            setTime(timeFormat);
          }
        }}
        defaultValue={dayjs('00:00', 'HH:mm')}
        format="HH:mm"
        className="mb-2 w-[10rem]"
        size="large"
      />
      <label htmlFor="cost" className="mb-2">
        비용
      </label>
      <input
        id="cost"
        type="number"
        onChange={(e) => {
          costRef.current = e.target.value;
        }}
        className="p-2 font-normal rounded-lg w-40 mb-2"
      />
      <label htmlFor="memo" className="mb-2">
        메모
      </label>
      <textarea
        id="memo"
        rows={5}
        className="p-2 mb-4 h-[10rem] rounded-lg font-normal"
        onChange={(e) => {
          memoRef.current = e.target.value;
        }}
      />
      <div className="self-end mt-4">
        <button
          type="submit"
          className="mr-2 bg-primary p-2 rounded-lg text-white"
          onClick={(e) => {
            e.preventDefault();
            sendTravelEditListItem();
          }}
        >
          추가하기
        </button>
        <button
          onClick={() => setShowEditForm(false)}
          type="button"
          className="bg-primary p-2 rounded-lg text-white"
        >
          취소
        </button>
      </div>
    </form>
  );
}
