/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/self-closing-comp */

'use client';

import { useAppDispatch } from '@/store/hook';
import React, { useEffect, useRef } from 'react';

type Props = {
  setKakaoMap: React.Dispatch<React.SetStateAction<kakao.maps.Map | undefined>>;
};

export default function TravelMapUse({ setKakaoMap }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!mapRef.current) return;

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(mapRef.current, options);
    setKakaoMap(map);
  }, [dispatch, setKakaoMap]);

  return (
    <div className="h-full">
      <div ref={mapRef} className="w-full h-full rounded-3xl"></div>
    </div>
  );
}
