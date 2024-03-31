/* eslint-disable react/jsx-no-useless-fragment */
import { selectMapMarker } from '@/store/travel/travelMap.slice';
import { useAppSelector } from '@/store/hook';
import Svg from '@/assets/Mapmarker.svg';
import React, { useEffect, useState } from 'react';
import { MapMarkerType } from '@/types/TravelType';

type Props = {
  kakaoMap: kakao.maps.Map;
};

const makeMarker = (
  previewMarkerLocation: MapMarkerType,
): kakao.maps.Marker => {
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

export default function TravelRenderMarkers({ kakaoMap }: Props) {
  const mapMarkersLocation = useAppSelector(selectMapMarker);
  const [previousMarker, setPreviousMarker] = useState<kakao.maps.Marker[]>([]);

  useEffect(() => {
    const newMarker = mapMarkersLocation.map((marker) => makeMarker(marker));

    setPreviousMarker((preMapMarkersLocation) => {
      preMapMarkersLocation.forEach((markerLocation) => {
        markerLocation.setMap(null);
      });

      return newMarker;
    });
  }, [mapMarkersLocation]);

  useEffect(() => {
    previousMarker.forEach((markerLocation) => {
      if (kakaoMap) {
        markerLocation.setMap(kakaoMap);
        kakaoMap.setCenter(markerLocation.getPosition());
        kakaoMap.setLevel(3);
      }
    });
  }, [previousMarker, kakaoMap]);

  return <></>;
}
