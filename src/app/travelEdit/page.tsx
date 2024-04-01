'use client';

import TravelMap from '@/components/TravelMap';
import React from 'react';
import TravelEdit from '@/components/TravelEdit';
import withAuth from '@/components/LoginForm/withAuth';

function Page() {
  return (
    <div className="flex gap-[5rem] pt-[8rem] p-12 h-full">
      <div className="basis-1/2">
        <TravelMap />
      </div>
      <TravelEdit />
    </div>
  );
}

export default withAuth(Page);
