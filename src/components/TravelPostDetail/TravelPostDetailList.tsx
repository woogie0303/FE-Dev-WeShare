'use client';

import React, { useEffect } from 'react';
import { PlaceItemType, DayDetailType } from '@/types/TravelType';
import { setMarkersLocation } from '@/store/travel/travelMap.slice';
import { useAppDispatch } from '@/store/hook';
import { useCurrentPageSection } from '@/hooks/useCurrentPageSection';
import TravelPostDetailItem from './TravelPostDetailItem';
import TravelPostDetailNav from './TravelPostDetailNav';

type Props = {
  travelPostDayDetail: DayDetailType<PlaceItemType>[];
};

export default function TravelPostDetailList({ travelPostDayDetail }: Props) {
  const dispatch = useAppDispatch();
  const {
    handleNextPagination,
    handlePrevPagination,
    currentPage,
    currentPageArr,
    handleOnClickPagination,
  } = useCurrentPageSection(travelPostDayDetail);

  useEffect(() => {
    const activePositionDetailMapMarker: Pick<
      PlaceItemType,
      'latitude' | 'longitude'
    >[] = travelPostDayDetail[currentPage].places.map((item) => ({
      longitude: item.longitude,
      latitude: item.latitude,
    }));

    dispatch(setMarkersLocation(activePositionDetailMapMarker));
  }, [currentPage, dispatch, travelPostDayDetail]);

  return (
    <>
      <TravelPostDetailNav
        handleNextPagination={handleNextPagination}
        handlePrevPagination={handlePrevPagination}
        handleOnClickPagination={handleOnClickPagination}
        currentPageArr={currentPageArr}
        currentPage={currentPage}
      />
      <div className="h-full overflow-scroll gap-2">
        {travelPostDayDetail[currentPage].places.map((detailItem) => (
          <TravelPostDetailItem
            key={detailItem.expense}
            detailItem={detailItem}
          />
        ))}
      </div>
    </>
  );
}
