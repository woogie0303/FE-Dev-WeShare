'use client';

import React, { useRef, useState } from 'react';
import { TimePicker } from 'antd';
import { useAppDispatch } from '@/store/hook';
import { resetMarkerLocation } from '@/store/travel/travelMap.slice';
import { EditListItemType, SelectedPlaceType } from '@/types/TravelType';
import { addActiveTravelItem } from '@/store/travel/travelEdit.slice';
import { timeDefault } from '@/utils/dayjs';
import TravelPlaceSearch from './TravelPlaceSearch';

type Props = {
  setShowEditForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TravelEditListItemForm({ setShowEditForm }: Props) {
  const [time, setTime] = useState<string>();
  const [selectedPlace, setSelectedPlace] = useState<
    SelectedPlaceType | undefined
  >();
  const costRef = useRef<string>();
  const memoRef = useRef<string>();
  const dispatch = useAppDispatch();
  const sendTravelEditListItem = () => {
    if (selectedPlace && time && costRef.current && memoRef.current) {
      const editItem: EditListItemType = {
        title: selectedPlace.title,
        time,
        memo: memoRef.current,
        expense: Number(costRef.current),
        latitude: selectedPlace.latitude,
        longitude: selectedPlace.longitude,
      };

      dispatch(addActiveTravelItem(editItem));
      setShowEditForm(false);
      dispatch(resetMarkerLocation());
    }
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
        defaultValue={timeDefault}
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
          type="button"
          className="mr-2 bg-primary p-2 rounded-lg text-white"
          onClick={(e) => {
            e.preventDefault();
            sendTravelEditListItem();
          }}
        >
          추가하기
        </button>
        <button
          onClick={() => {
            setShowEditForm(false);
            dispatch(resetMarkerLocation());
          }}
          type="button"
          className="bg-primary p-2 rounded-lg text-white"
        >
          취소
        </button>
      </div>
    </form>
  );
}
