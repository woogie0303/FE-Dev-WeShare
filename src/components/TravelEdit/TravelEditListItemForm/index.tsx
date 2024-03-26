'use client';

import React, { useEffect, useState } from 'react';
import { TimePicker } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { resetMarkerLocation } from '@/store/travel/travelMap.slice';
import { EditListItemType, SelectedPlaceType } from '@/types/TravelType';
import {
  addActiveTravelItem,
  changeEditListItem,
  removeActiveTravelItem,
  selectEditListItem,
} from '@/store/travel/travelEdit.slice';
import { timeDefault } from '@/utils/dayjs';
import TravelPlaceSearch from './TravelPlaceSearch';

type Props = {
  setShowEditForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TravelEditListItemForm({ setShowEditForm }: Props) {
  const editListItem = useAppSelector(selectEditListItem);
  const [time, setTime] = useState<string>();
  const [selectedPlace, setSelectedPlace] = useState<
    SelectedPlaceType | undefined
  >();

  const [expense, setExpense] = useState<number>(0);
  const [memo, setMemo] = useState('');
  const dispatch = useAppDispatch();
  const sendTravelEditListItem = () => {
    if (selectedPlace && time && expense && memo) {
      const editItem: EditListItemType = {
        title: selectedPlace.title,
        latitude: selectedPlace.latitude,
        longitude: selectedPlace.longitude,
        time,
        memo,
        expense,
      };

      dispatch(addActiveTravelItem(editItem));
      setShowEditForm(false);
      dispatch(resetMarkerLocation());
    }

    if (editListItem) {
      dispatch(removeActiveTravelItem(editListItem));
      dispatch(changeEditListItem(undefined));
    }
  };

  useEffect(() => {
    if (editListItem) {
      setSelectedPlace({
        title: editListItem.title,
        latitude: editListItem.latitude,
        longitude: editListItem.longitude,
      });
      setTime(editListItem.time);
      setExpense(editListItem.expense);
      setMemo(editListItem.memo);
    }
  }, [editListItem]);

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
            const timeFormat = newValue.format('hh:mm A');

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
        value={expense === 0 ? '' : expense}
        type="number"
        onChange={(e) => {
          setExpense(Number(e.target.value));
        }}
        className="p-2 font-normal rounded-lg w-40 mb-2"
      />
      <label htmlFor="memo" className="mb-2">
        메모
      </label>
      <textarea
        id="memo"
        value={memo}
        rows={5}
        className="p-2 mb-4 h-[10rem] rounded-lg font-normal"
        onChange={(e) => {
          setMemo(e.target.value);
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
            if (editListItem) {
              dispatch(changeEditListItem(undefined));
            }
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
