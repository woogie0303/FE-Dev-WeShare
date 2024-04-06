/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

type Props = {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
};

export default function MyPageNav({ activeNav, setActiveNav }: Props) {
  return (
    <ul className="flex gap-4 font-medium text-xl">
      <li
        className={`cursor-pointer p-2 ${
          activeNav === 'saveSchedules' ? 'border-b-8 border-b-secondary' : ''
        }`}
        onClick={() => {
          setActiveNav('saveSchedules');
        }}
      >
        임시 저장
      </li>
      <li
        className={`cursor-pointer p-2 ${
          activeNav === 'schedules' ? 'border-b-8 border-b-secondary' : ''
        }`}
        onClick={() => {
          setActiveNav('schedules');
        }}
      >
        게시물
      </li>
    </ul>
  );
}
