/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import React from 'react';
import TravelPreviewRenderMarker from './TravelPreviewRenderMarker';
import TravelRenderMarkers from './TravelRenderMarkers';

type Props = {
  kakaoMap: kakao.maps.Map;
};

export default function TravelMarkerContainer({ kakaoMap }: Props) {
  return (
    <>
      <TravelPreviewRenderMarker kakaoMap={kakaoMap} />
      <TravelRenderMarkers kakaoMap={kakaoMap} />
    </>
  );
}
