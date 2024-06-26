/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  BookmarkSquareIcon,
  PaperAirplaneIcon,
  PlusIcon,
  TrashIcon,
  InboxIcon,
} from '@heroicons/react/16/solid';
import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setMarkersLocation } from '@/store/travel/travelMap.slice';
import { PlaceItemType } from '@/types/TravelType';
import {
  selectDayDetail,
  selectTravelActiveSchedule,
  setActiveTravelSchedule,
} from '@/store/travel/travelEdit.slice';

import { useModal } from '@/hooks/useModal';
import TravelEditListItem from './TravelEditListItem';

type Props = {
  setShowEditListItemForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TravelEditListContainer({
  setShowEditListItemForm,
}: Props) {
  const dispatch = useAppDispatch();
  const activeTravelSchedule = useAppSelector(selectTravelActiveSchedule);
  const dayDetail = useAppSelector(selectDayDetail);
  const { onOpen: onOpenSendModal } = useModal('TravelEditFormModal');
  const makeActiveMarkersArr = useCallback(
    (activeVisitPlacesArr: PlaceItemType[]) => {
      const activeMarkers: Pick<PlaceItemType, 'latitude' | 'longitude'>[] =
        activeVisitPlacesArr.map((activeVisitPlace) => ({
          latitude: activeVisitPlace.latitude,
          longitude: activeVisitPlace.longitude,
        }));

      return activeMarkers;
    },
    [],
  );
  const handleTravelNav = (activeDate: string) => {
    dispatch(setActiveTravelSchedule(activeDate));
  };

  useEffect(() => {
    const activeMarkers = makeActiveMarkersArr(activeTravelSchedule.places);

    dispatch(setMarkersLocation(activeMarkers));
  }, [activeTravelSchedule, dispatch, makeActiveMarkersArr]);

  return dayDetail.length ? (
    <div className="border-third border-2 mt-4 px-2 py-4  h-full">
      {/* Day Nav */}
      <div className="flex justify-between items-center px-2 text-lg mb-8 font-bold">
        <ul className=" w-[20rem] flex text-center space-x-4 whitespace-nowrap overflow-x-auto  scrollbar-hide">
          {dayDetail.map((visitDate, i) => (
            <li
              key={visitDate.travelDate}
              className={`${activeTravelSchedule.travelDate === visitDate.travelDate ? 'text-[#508AFF] border-b-[6px]  border-[#508AFF]' : 'text-third'} cursor-pointer py-1`}
              onClick={() => handleTravelNav(visitDate.travelDate)}
            >
              {i + 1}일차
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-primary">
          <PlusIcon
            onClick={() => setShowEditListItemForm(true)}
            className="w-24 cursor-pointer"
          />
          <TrashIcon className="cursor-pointer" />
          <BookmarkSquareIcon className="cursor-pointer" />
          <PaperAirplaneIcon
            className="cursor-pointer"
            onClick={onOpenSendModal}
          />
        </div>
      </div>
      {/* Day Travel Edit ListItem */}
      <div className="h-[25rem] overflow-scroll">
        {activeTravelSchedule.places.map((visitPlace) => (
          <TravelEditListItem
            key={visitPlace.title}
            visitPlace={visitPlace}
            setShowEditListItemForm={setShowEditListItemForm}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="h-full flex flex-col justify-center items-center text-secondary">
      <InboxIcon className="h-20 mb-5" />
      <p className="text-2xl font-bold">날짜를 선택해 주세요</p>
    </div>
  );
}
