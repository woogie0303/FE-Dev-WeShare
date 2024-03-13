/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  BookmarkSquareIcon,
  PaperAirplaneIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store/hook';
import { setMarkersLocation } from '@/store/Travel/TravelMap.slice';
import { useTravelScheduleContext } from '@/contexts/TravelScheduleContext';
import TravelEditListItem from './TravelEditListItem';

export default function TravelEditListContainer() {
  const {
    travelScheduleArr,
    activeVisitDate,
    setShowEditForm,
    setActiveVisitDate,
  } = useTravelScheduleContext();
  const [activeVisitPlaces, setActiveVisitPlaces] = useState<EditListItem[]>(
    [],
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (travelScheduleArr && activeVisitDate) {
      const visitPlaces = travelScheduleArr.find(
        (visitDate) => visitDate.travelDate === activeVisitDate,
      );
      if (visitPlaces) {
        const newActiveVisitPlaces = [...visitPlaces.visitPlaces];
        setActiveVisitPlaces(newActiveVisitPlaces);
      }
    }
  }, [activeVisitDate, travelScheduleArr]);

  useEffect(() => {
    if (activeVisitPlaces) {
      const activeMarkers: MapMarkerType[] = activeVisitPlaces.map(
        (activeVisitPlace) => ({
          latitude: activeVisitPlace.latitude,
          longitude: activeVisitPlace.longitude,
        }),
      );

      dispatch(setMarkersLocation(activeMarkers));
    }
  }, [activeVisitPlaces, dispatch]);

  return (
    <div className="border-third border-2 mt-4 px-2 py-4  h-full">
      {/* Day Nav */}
      <div className="flex justify-between items-center px-2 text-lg mb-8 font-bold">
        <ul className=" w-[20rem] flex text-center space-x-4 whitespace-nowrap overflow-x-auto  scrollbar-hide">
          {travelScheduleArr.map((visitDate, i) => (
            <li
              key={visitDate.travelDate}
              className={`${activeVisitDate === visitDate.travelDate ? 'text-[#508AFF] border-b-[6px]  border-[#508AFF]' : 'text-third'} cursor-pointer py-1`}
              onClick={() => {
                setActiveVisitDate(visitDate.travelDate);
              }}
            >
              {i + 1}일차
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-primary">
          <PlusIcon
            onClick={() => setShowEditForm(true)}
            className="w-24 cursor-pointer"
          />
          <TrashIcon className="cursor-pointer" />
          <BookmarkSquareIcon className="cursor-pointer" />
          <PaperAirplaneIcon className="cursor-pointer" />
        </div>
      </div>
      {/* Day Travel Edit ListItem */}
      <div className="h-[25rem] overflow-scroll">
        {activeVisitPlaces &&
          activeVisitPlaces.map((activeVisitPlace) => (
            <TravelEditListItem
              key={activeVisitPlace.title}
              activeVisitPlace={activeVisitPlace}
            />
          ))}
      </div>
    </div>
  );
}
