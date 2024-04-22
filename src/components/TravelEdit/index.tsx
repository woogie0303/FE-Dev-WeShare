'use client';

import {
  DayDetailType,
  PlaceItemType,
  SchedulesType,
} from '@/types/TravelType';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hook';
import {
  setCompareDayDetail,
  setEditAllItem,
} from '@/store/travel/travelEdit.slice';
import withAuth from '../LoginForm/withAuth';
import TravelMap from '../TravelMap';
import TravelEditForm from './TravelEditForm';

type Props = {
  travelPostDetailData: SchedulesType<DayDetailType<PlaceItemType>> | null;
};

function TravelEdit({ travelPostDetailData }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (travelPostDetailData) {
      dispatch(setEditAllItem(travelPostDetailData));
      dispatch(setCompareDayDetail(travelPostDetailData.dayDetail));
    }
  }, [dispatch, travelPostDetailData]);

  return (
    <>
      <div className="basis-1/2">
        <TravelMap />
      </div>
      <TravelEditForm />
    </>
  );
}
export default withAuth(TravelEdit);
