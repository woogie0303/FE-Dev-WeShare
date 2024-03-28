'use client';

import React, { useEffect, useState } from 'react';
import {
  EditListItemType,
  MapMarkerType,
  TravelPostDetailType,
} from '@/types/TravelType';
import { setMarkersLocation } from '@/store/travel/travelMap.slice';
import { useAppDispatch } from '@/store/hook';
import TravelPostDetailItem from './TravelPostDetailItem';
import TravelPostDetailNav from './TravelPostDetailNav';

type Props = {
  travelPostData: TravelPostDetailType;
};

export default function TravelPostDetailList({ travelPostData }: Props) {
  const [activePostDetailItems, setActivePostDetailItems] = useState<
    EditListItemType[]
  >([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (activePostDetailItems.length) {
      const activePositionDetailMapMarker: MapMarkerType[] =
        activePostDetailItems.map((item) => ({
          longitude: item.longitude,
          latitude: item.latitude,
        }));

      dispatch(setMarkersLocation(activePositionDetailMapMarker));
    }
  }, [activePostDetailItems, dispatch]);
  return (
    <div className=" flex flex-col basis-1/2 h-full">
      <TravelPostDetailNav
        dayDetail={travelPostData.dayDetail}
        setActivePostDetailItems={setActivePostDetailItems}
      />
      <div className="h-full overflow-scroll gap-2">
        {activePostDetailItems.map((detailItem) => (
          <TravelPostDetailItem
            key={detailItem.expense}
            detailItem={detailItem}
          />
        ))}
      </div>
    </div>
  );
}
