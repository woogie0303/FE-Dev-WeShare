'use client';

import React, { useRef, useState } from 'react';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import TravelPlaceSearch from './TravelPlaceSearch';

type Prop = {
  setEditListItem: React.Dispatch<React.SetStateAction<EditListItem>>;
};

export default function TravelEditListItemForm({ setEditListItem }: Prop) {
  const [time, setTime] = useState<Dayjs | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<
    SelectedPlaceType | undefined
  >();
  const costRef = useRef<string>();
  const memoRef = useRef<string>();
  const sendTravelEditListItem = () => {
    if (selectedPlace && time && costRef.current && memoRef.current) {
      setEditListItem({
        title: selectedPlace.title,
        time: `${time.hour()}:${time.minute()}`,
        memo: memoRef.current,
        expense: Number(costRef.current),
        latitude: selectedPlace.latitude,
        longitude: selectedPlace.longitude,
      });
    }
  };

  return (
    <form className="bg-third flex flex-col px-10 h-full p-4 font-bold">
      <TravelPlaceSearch
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
      <label htmlFor="hour" className="mb-2">
        시간
      </label>
      <DesktopTimePicker
        sx={{
          width: '10rem',
          marginBottom: '1rem',
        }}
        onChange={(newValue) => setTime(newValue)}
        defaultValue={dayjs('2022-04-17T15:30')}
      />
      <label htmlFor="cost" className="mb-2">
        비용
      </label>
      <input
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
        <button type="button" className="bg-primary p-2 rounded-lg text-white">
          취소
        </button>
      </div>
    </form>
  );
}
