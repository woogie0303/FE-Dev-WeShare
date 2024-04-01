'use client';

import React from 'react';
import TravelEditHeader from './TravelEditHeader';
import TravelEditCalendar from './TravelEditCalendar';
import TravelEditListContainer from './TravelEditListContainer';

type Props = {
  setShowEditForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TravelEditForm({ setShowEditForm }: Props) {
  return (
    <form className="basis-1/2 flex flex-col h-full ">
      <TravelEditHeader />
      <TravelEditCalendar />
      <TravelEditListContainer setShowEditForm={setShowEditForm} />
    </form>
  );
}
