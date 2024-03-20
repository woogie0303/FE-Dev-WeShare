/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/self-closing-comp */

'use client';

import { setTravelMap } from '@/store/travel/travelMap.slice';
import { useAppDispatch } from '@/store/hook';
import React, { useEffect, useRef } from 'react';

export default function TravelMapUse() {
  const mapRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    kakao.maps.load(() => {
      if (!mapRef.current) return;

      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      // 직렬화로 데이터 바꾸기
      const map = new kakao.maps.Map(mapRef.current, options);

      dispatch(setTravelMap(map));
    });
  }, [dispatch]);

  return (
    <div className="w-[50%]">
      <div ref={mapRef} className="w-full h-full"></div>
    </div>
  );
}
