/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { useAppSelector } from '@/store/hook';
import {
  useEditTravelPostMutation,
  useUpDateTravelPostMutation,
} from '@/store/travel/travelApi.slice';
import {
  selectCompareDayDetail,
  selectTravelEditDateRange,
  selectTravelEditDestination,
  selectTravelEditTitle,
  selectDayDetail,
  selectTravelScheduleId,
} from '@/store/travel/travelEdit.slice';
import { useParams, useRouter } from 'next/navigation';
import { isEqual } from 'lodash';
import BaseModal from './BaseModal';

type Props = {
  onClose: () => void;
};

export default function TravelEditFormModal({ onClose }: Props) {
  const travelEditTitle = useAppSelector(selectTravelEditTitle);
  const travelEditDestination = useAppSelector(selectTravelEditDestination);
  const travelEditDateRange = useAppSelector(selectTravelEditDateRange);
  const travelScheduleId = useAppSelector(selectTravelScheduleId);
  const dayDetail = useAppSelector(selectDayDetail);
  const compareDayDetail = useAppSelector(selectCompareDayDetail);
  const [editTravelPost] = useEditTravelPostMutation();
  const router = useRouter();
  const params: { travelEditId: string } = useParams();
  const [updateTravelPost] = useUpDateTravelPostMutation();

  const onSubmitHandler = async () => {
    if (params.travelEditId === 'edit') {
      editTravelPost({
        title: travelEditTitle,
        destination: travelEditDestination,
        dayDetail,
        ...travelEditDateRange,
      });
    } else {
      const updateDayDetail = dayDetail
        .filter(
          (detailItem, index) => !isEqual(detailItem, compareDayDetail[index]),
        )
        .map((detailItem) => {
          const { totalDayPrice, ...others } = detailItem;
          return { ...others };
        });
      updateTravelPost({
        scheduleId: travelScheduleId,
        title: travelEditTitle,
        destination: travelEditDestination,
        dayDetail: updateDayDetail,
        ...travelEditDateRange,
      });

      console.log({
        scheduleId: travelScheduleId,
        title: travelEditTitle,
        destination: travelEditDestination,
        dayDetail: updateDayDetail,
        ...travelEditDateRange,
      });
    }
    onClose();
    router.push('/');
  };
  return (
    <BaseModal
      title="여행 기록 작성"
      onCheck={onSubmitHandler}
      onClose={onClose}
    >
      <p>작성하신 여행기록을 포스팅 하겠습니까?</p>
    </BaseModal>
  );
}
