'use client';

import React from 'react';
import { useTravelScheduleContext } from '@/contexts/TravelScheduleContext';
import TravelEditListItemForm from '../TravelEditListItemForm';
import TravelEditCalendar from './TravelEditCalendar';
import TravelEditListContainer from './TravelEditListContainer';
import TravelEditTitle from './TravelEditTitle';

export default function TravelEdit() {
  const { showEditForm, activeVisitDate } = useTravelScheduleContext();
  return showEditForm ? (
    <TravelEditListItemForm />
  ) : (
    <form className="basis-1/2 flex flex-col h-full ">
      <TravelEditTitle />
      <TravelEditCalendar />
      {activeVisitDate && <TravelEditListContainer />}
    </form>
  );
}
