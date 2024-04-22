/* eslint-disable react/jsx-no-useless-fragment */
import { selectPreviewMarker } from '@/store/travel/travelMap.slice';
import { useAppSelector } from '@/store/hook';
import React, { useEffect, useState } from 'react';
import Svg from '@/assets/Mapmarker.svg';
import { PlaceItemType } from '@/types/TravelType';

type Props = {
  kakaoMap: kakao.maps.Map;
};

const makePreviewMarker = (
  previewMarkerLocation: Pick<PlaceItemType, 'latitude' | 'longitude'>,
) => {
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

export default function TravelPreviewRenderMarker({ kakaoMap }: Props) {
  const previewMarkerLocation = useAppSelector(selectPreviewMarker);

  const [previousMarker, setPreviousMarker] = useState<kakao.maps.Marker>();

  useEffect(() => {
    setPreviousMarker((pre) => {
      pre?.setMap(null);

      return previewMarkerLocation && makePreviewMarker(previewMarkerLocation);
    });
  }, [previewMarkerLocation]);

  useEffect(() => {
    if (kakaoMap && previousMarker) {
      previousMarker.setMap(kakaoMap);
      kakaoMap.setCenter(previousMarker.getPosition());
      kakaoMap.setLevel(3);
    }
  }, [previousMarker, kakaoMap]);

  return <></>;
}
