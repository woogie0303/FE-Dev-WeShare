import { setMarkerLocation } from '@/store/Travel/TravelMap.slice';
import { useAppDispatch } from '@/store/hook';
import React from 'react';

type Props = {
  autoList: SearchPlace;
  setShowAutoCompleteList: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPlace: React.Dispatch<
    React.SetStateAction<SelectedPlaceType | undefined>
  >;
};

export default function TravelPlaceAutoItem({
  autoList,
  setShowAutoCompleteList,
  setSelectedPlace,
}: Props) {
  const dispatch = useAppDispatch();
  const sendMapMarkerLocation = (autoItem: SearchPlace): void => {
    const { x, y } = autoItem;

    dispatch(setMarkerLocation({ longitude: x, latitude: y }));
  };
  const handleSelectedQuery = (autoItem: SearchPlace): void => {
    setShowAutoCompleteList(false);
    setSelectedPlace({
      title: autoItem.place_name,
      longitude: autoItem.x,
      latitude: autoItem.y,
    });
    sendMapMarkerLocation(autoItem);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <li
      className="p-5 group cursor-pointer  hover:bg-[#6785ff] hover:text-white flex justify-between items-center"
      onClick={() => handleSelectedQuery(autoList)}
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
          setSelectedPlace(undefined);
        }}
      >
        미리보기
      </button>
    </li>
  );
}
