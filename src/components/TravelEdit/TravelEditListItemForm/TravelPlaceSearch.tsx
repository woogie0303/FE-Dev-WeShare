'use client';

import { useDebounceSearchQuery } from '@/hooks/useDebounceSearchQuery';
import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  resetMarkerLocation,
  selectPreviewMarker,
} from '@/store/travel/travelMap.slice';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { SelectedPlaceType } from '@/types/TravelType';
import TravelPlaceAutoList from './TravelPlaceAutoList';

type Props = {
  selectedPlace: SelectedPlaceType | undefined;
  setSelectedPlace: React.Dispatch<
    React.SetStateAction<SelectedPlaceType | undefined>
  >;
};

export default function TravelPlaceSearch({
  selectedPlace,
  setSelectedPlace,
}: Props) {
  const [autoCompleteLists, setAutoCompleteLists] =
    useState<kakao.maps.services.PlacesSearchResult>();
  const [searchQuery, setSearchQuery] = useState<string>();
  const previewMarkerLocation = useAppSelector(selectPreviewMarker);
  const dispatch = useAppDispatch();
  const debounceQuery = useDebounceSearchQuery(searchQuery, 500);

  useEffect(() => {
    if (debounceQuery) {
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(debounceQuery, (data) => {
        setAutoCompleteLists(data);
      });
    }
  }, [debounceQuery]);

  return (
    <div className="relative mb-4">
      <label htmlFor="location" className="mb-2">
        장소
      </label>
      {selectedPlace && previewMarkerLocation ? (
        <div className="mt-2">
          <div className="w-fit flex bg-[#eef1fe] text-[#626262] rounded-lg p-2">
            <span className=" mr-1 rounded-lg cursor-default ">
              {selectedPlace.title}
            </span>
            <XMarkIcon
              className="w-5  inline cursor-pointer"
              onClick={() => {
                dispatch(resetMarkerLocation());
                setSelectedPlace(undefined);
              }}
            />
          </div>
        </div>
      ) : (
        <>
          <input
            className="p-2 mt-2 font-normal rounded-lg w-full"
            id="location"
            autoComplete="off"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onBlur={(e) => {
              if (!e.relatedTarget) {
                setAutoCompleteLists(undefined);
              }
            }}
          />
          {autoCompleteLists && (
            <TravelPlaceAutoList
              autoCompleteLists={autoCompleteLists}
              setSelectedPlace={setSelectedPlace}
            />
          )}
        </>
      )}
    </div>
  );
}
