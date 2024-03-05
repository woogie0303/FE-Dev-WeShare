/* eslint-disable react/self-closing-comp */

'use client';

import { selectPreviewMarker } from '@/store/Travel/TravelMap.slice';
import { useAppSelector } from '@/store/hook';
import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function TravelMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const previewMarkerLocation = useAppSelector(selectPreviewMarker);
  const [map, setMap] = useState<any>();
  const [previousMarker, setPreviousMarker] = useState<any>();

  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      setMap(new window.kakao.maps.Map(mapRef.current, options));
    });
  }, []);

  useEffect(() => {
    if (map && previewMarkerLocation) {
      const markerPosition = new window.kakao.maps.LatLng(
        Number(previewMarkerLocation.latitude),
        Number(previewMarkerLocation.longitude),
      );

      const previewMarker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      if (previousMarker !== previewMarker) {
        previousMarker?.setMap(null);
        setPreviousMarker(previewMarker);
      }

      previewMarker.setMap(map);
      map.setCenter(markerPosition);
      map.setLevel(3);
    }

    if (!previewMarkerLocation && previousMarker) {
      previousMarker.setMap(null);
    }
  }, [previewMarkerLocation, map]);

  return (
    <div className="w-[50%] p-[5rem] relative">
      <div ref={mapRef} className="top-0 left-0 absolute w-full h-full"></div>
    </div>
  );
}
