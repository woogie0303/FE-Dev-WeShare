import TravelMap from '@/components/TravelMap';
import React from 'react';
import TravelEdit from '@/components/TravelEdit/TravelEditForm';
import TravelScheduleContextProvider from '@/contexts/TravelScheduleContext';

export default function page() {
  return (
    <div className="flex gap-[5rem] p-12 h-[calc(100vh-4.5rem)]  ">
      <TravelMap />
      <TravelScheduleContextProvider>
        <TravelEdit />
      </TravelScheduleContextProvider>
    </div>
  );
}
