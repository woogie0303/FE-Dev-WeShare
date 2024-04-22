/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { setPreviewMarkerLocation } from '@/store/travel/travelMap.slice';
import { useAppDispatch } from '@/store/hook';
import { PlaceItemType } from '@/types/TravelType';
import React from 'react';

type Props = {
  autoList: kakao.maps.services.PlacesSearchResultItem;
  setSelectedPlace: React.Dispatch<
    React.SetStateAction<
      Pick<PlaceItemType, 'title' | 'latitude' | 'longitude'> | undefined
    >
  >;
};

export default function TravelPlaceAutoItem({
  autoList,
  setSelectedPlace,
}: Props) {
  const dispatch = useAppDispatch();
  const sendMapMarkerLocation = (
    autoItem: kakao.maps.services.PlacesSearchResultItem,
  ): void => {
    const { x, y } = autoItem;

    dispatch(
      setPreviewMarkerLocation({ longitude: Number(x), latitude: Number(y) }),
    );
  };
  const handleSelectedQuery = (
    autoItem: kakao.maps.services.PlacesSearchResultItem,
  ): void => {
    setSelectedPlace({
      title: autoItem.place_name,
      longitude: Number(autoItem.x),
      latitude: Number(autoItem.y),
    });
    sendMapMarkerLocation(autoItem);
  };

  return (
    <li
      className="p-5 group cursor-pointer  hover:bg-[#6785ff] hover:text-white flex justify-between items-center"
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      onClick={() => {
        handleSelectedQuery(autoList);
      }}
    >
      <div className="">
        <p className="mb-2">{autoList.place_name}</p>
        <p className="text-light text-sm">{autoList.address_name}</p>
      </div>
      <button
        type="button"
        className="hidden p-2 opacity-50  bg-white text-[#6785ff] group-hover:block rounded-lg hover:opacity-100"
        onClick={(e) => {
          e.stopPropagation();
          sendMapMarkerLocation(autoList);
        }}
      >
        미리보기
      </button>
    </li>
  );
}
