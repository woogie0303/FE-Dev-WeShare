'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import TravelMapUse from './TravelMapUse';
import TravelMarkerContainer from './TravelMarkerContainer';

export default function TravelMap() {
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [kakaoMap, setKakaoMap] = useState<kakao.maps.Map>();

  return (
    <>
      <Script
        type="text/javascript"
        onReady={() => {
          kakao.maps.load(() => {
            setMapIsOpen(true);
          });
        }}
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_KEY}&autoload=false&libraries=services`}
      />
      {mapIsOpen && <TravelMapUse setKakaoMap={setKakaoMap} />}
      {kakaoMap && <TravelMarkerContainer kakaoMap={kakaoMap} />}
    </>
  );
}
