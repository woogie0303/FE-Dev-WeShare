/* eslint-disable react/jsx-no-useless-fragment */
import {
  selectPreviewMarker,
  selectTravelKakaoMap,
} from '@/store/Travel/travelMap.slice';
import { useAppSelector } from '@/store/hook';
import React, { useEffect, useState } from 'react';
import Svg from '@/assets/Mapmarker.svg';
import { MapMarkerType } from '@/types/TravelType';

const makePreviewMarker = (previewMarkerLocation: MapMarkerType) => {
  const previewMarkerPosition = new kakao.maps.LatLng(
    previewMarkerLocation.latitude,
    previewMarkerLocation.longitude,
  );

  const markerSize = new kakao.maps.Size(50, 50);
  const markerImage = new kakao.maps.MarkerImage(Svg.src, markerSize, {
    offset: new kakao.maps.Point(27, 69),
  });

  const previewMarker = new kakao.maps.Marker({
    position: previewMarkerPosition,
    image: markerImage,
  });

  return previewMarker;
};

export default function TravelPreviewRenderMarker() {
  const previewMarkerLocation = useAppSelector(selectPreviewMarker);

  const travelKakaoMap = useAppSelector(selectTravelKakaoMap);
  const [previousMarker, setPreviousMarker] = useState<kakao.maps.Marker>();

  useEffect(() => {
    if (!travelKakaoMap) return;

    setPreviousMarker((pre) => {
      pre?.setMap(null);

      return previewMarkerLocation && makePreviewMarker(previewMarkerLocation);
    });
  }, [previewMarkerLocation, travelKakaoMap]);

  useEffect(() => {
    if (travelKakaoMap && previousMarker) {
      previousMarker.setMap(travelKakaoMap);
      travelKakaoMap.setCenter(previousMarker.getPosition());
      travelKakaoMap.setLevel(3);
    }
  }, [previousMarker, travelKakaoMap]);

  return <></>;
}
