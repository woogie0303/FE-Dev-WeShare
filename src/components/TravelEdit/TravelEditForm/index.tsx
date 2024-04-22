'use client';

import React, { useState } from 'react';
import TravelEditHeader from './TravelEditHeader';
import TravelEditCalendar from './TravelEditCalendar';
import TravelEditListContainer from './TravelEditListContainer';
import TravelEditListItemForm from '../TravelEditListItemForm';

export default function TravelEditForm() {
  const [showEditListItemForm, setShowEditListItemForm] = useState(false);

  return showEditListItemForm ? (
    <TravelEditListItemForm setShowEditListItemForm={setShowEditListItemForm} />
  ) : (
    <form className="basis-1/2 flex flex-col h-full ">
      <TravelEditHeader />
      <TravelEditCalendar />
      <TravelEditListContainer
        setShowEditListItemForm={setShowEditListItemForm}
      />
    </form>
  );
}
