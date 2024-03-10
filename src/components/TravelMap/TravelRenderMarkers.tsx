/* eslint-disable react/jsx-no-useless-fragment */
import {
  selectMapMarker,
  selectTravelKakaoMap,
} from '@/store/Travel/TravelMap.slice';
import { useAppSelector } from '@/store/hook';
import Svg from '@/assets/Mapmarker.svg';
import React, { useEffect, useState } from 'react';

const makeMarker = (
  previewMarkerLocation: MapMarkerType,
): kakao.maps.Marker => {
  const previewMarkerPosition = new kakao.maps.LatLng(
    Number(previewMarkerLocation.latitude),
    Number(previewMarkerLocation.longitude),
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

export default function TravelRenderMarkers() {
  const mapMarkersLocation = useAppSelector(selectMapMarker);

  const travelKakaoMap = useAppSelector(selectTravelKakaoMap);
  const [previousMarker, setPreviousMarker] = useState<kakao.maps.Marker[]>([]);

  useEffect(() => {
    const newMarker = mapMarkersLocation.map((marker) => makeMarker(marker));

    setPreviousMarker((preMapMarkersLocation) => {
      preMapMarkersLocation.forEach((markerLocation) => {
        markerLocation.setMap(null);
      });

      return newMarker;
    });
  }, [mapMarkersLocation, travelKakaoMap]);

  useEffect(() => {
    previousMarker.forEach((markerLocation) => {
      if (travelKakaoMap) {
        markerLocation.setMap(travelKakaoMap);
        travelKakaoMap.setCenter(markerLocation.getPosition());
        travelKakaoMap.setLevel(3);
      }
    });
  }, [previousMarker, travelKakaoMap]);

  return <></>;
}
