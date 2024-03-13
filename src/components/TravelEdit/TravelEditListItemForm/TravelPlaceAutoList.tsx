import React from 'react';
import TravelPlaceAutoItem from './TravelPlaceAutoItem';

type Props = {
  autoCompleteLists: kakao.maps.services.PlacesSearchResult;
  setSelectedPlace: React.Dispatch<
    React.SetStateAction<SelectedPlaceType | undefined>
  >;
};

export default function TravelPlaceAutoList({
  autoCompleteLists,
  setSelectedPlace,
}: Props) {
  return (
    <ul className=" absolute z-10 bg-[#eef1fe] text-[#626262] top-full mt-4 w-full  rounded-lg max-h-[20rem] overflow-scroll">
      {autoCompleteLists.map((autoList) => (
        <TravelPlaceAutoItem
          key={autoList.id}
          autoList={autoList}
          setSelectedPlace={setSelectedPlace}
        />
      ))}
    </ul>
  );
}
