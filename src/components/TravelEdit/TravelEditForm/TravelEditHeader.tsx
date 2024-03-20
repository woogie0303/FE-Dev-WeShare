/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import {
  selectTravelEditDestination,
  selectTravelEditTitle,
  setTravelDestination,
  setTravelTitle,
} from '@/store/travel/travelEdit.slice';

const metroPolitanNames = [
  '서울',
  '경기',
  '강원도',
  '충청도',
  '전라도',
  '경상도',
  '제주도',
];

export default function TravelEditHeader() {
  const [titleActive, setTitleActive] = useState(false);
  const [selectActive, setSelectActive] = useState(false);
  const travelTitle = useAppSelector(selectTravelEditTitle);
  const travelDestination = useAppSelector(selectTravelEditDestination);
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-8 justify-between items-center mb-5 ">
      {/* Title */}
      <input
        value={travelTitle}
        type="text"
        className={`w-2/3 ${titleActive ? 'border-[#508AFF]' : 'border-third'} font-bold text-[#508AFF] rounded border-2 p-2 placeholder:text-third `}
        placeholder="여행 제목을 입력해주세요"
        onChange={(e) => {
          if (e.target.value.length > 0) {
            setTitleActive(true);
            dispatch(setTravelTitle(e.target.value));
          } else {
            setTitleActive(false);
          }
        }}
      />
      {/* Select Box */}
      <div
        className="relative h-full cursor-pointer"
        onClick={() => setSelectActive(true)}
      >
        <div
          className={`w-[8rem] ${travelDestination.length ? 'border-[#508AFF] text-[#508AFF]' : 'border-third text-third'} rounded px-2 flex h-full justify-between items-center border-2`}
        >
          <p className="ml-1 font-bold ">
            {travelDestination.length ? travelDestination : '주요 여행지'}
          </p>
          <ChevronDownIcon className="w-6" />
        </div>
        {selectActive && (
          <ul className="top-0 absolute w-full z-20 rounded border-third border-2 bg-white">
            {metroPolitanNames.map((name) => (
              <li
                key={name}
                className="border-b-2 p-2 border-third font-bold text-third w-full last:border-none hover:bg-secondary hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectActive(false);
                  dispatch(setTravelDestination(name));
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
