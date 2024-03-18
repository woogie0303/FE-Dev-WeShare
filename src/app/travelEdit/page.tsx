import TravelMap from '@/components/TravelMap';
import React from 'react';
import TravelEdit from '@/components/TravelEdit';

export default function page() {
  return (
    <div className="flex gap-[5rem] p-12 h-[calc(100vh-4.5rem)]  ">
      <TravelMap />
      <TravelEdit />
    </div>
  );
}
