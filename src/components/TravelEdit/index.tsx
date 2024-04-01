'use client';

import { useState } from 'react';
import TravelEditListItemForm from './TravelEditListItemForm';
import TravelEditForm from './TravelEditForm';

export default function TravelEdit() {
  const [showEditForm, setShowEditForm] = useState(false);

  return showEditForm ? (
    <TravelEditListItemForm setShowEditForm={setShowEditForm} />
  ) : (
    <TravelEditForm setShowEditForm={setShowEditForm} />
  );
}
