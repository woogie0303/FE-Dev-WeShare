/* eslint-disable react/self-closing-comp */

'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function TravelMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const map = new window.kakao.maps.Map(mapRef.current, options);
    });
  }, []);
  return (
    <div className="w-[50%] p-[5rem] relative">
      <div ref={mapRef} className="top-0 left-0 absolute w-full h-full"></div>
    </div>
  );
}
