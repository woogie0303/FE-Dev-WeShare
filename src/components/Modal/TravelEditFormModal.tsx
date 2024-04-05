import React from 'react';

import { useAppSelector } from '@/store/hook';
import { useEditTravelPostMutation } from '@/store/travel/travelApi.slice';
import {
  selectTravelEditDateRange,
  selectTravelEditDestination,
  selectTravelEditTitle,
  selectTravelSchedules,
} from '@/store/travel/travelEdit.slice';
import { useRouter } from 'next/navigation';
import BaseModal from './BaseModal';

type Props = {
  onClose: () => void;
};

export default function TravelEditFormModal({ onClose }: Props) {
  const travelEditTitle = useAppSelector(selectTravelEditTitle);
  const travelEditDestination = useAppSelector(selectTravelEditDestination);
  const travelEditDateRange = useAppSelector(selectTravelEditDateRange);
  const travelSchedules = useAppSelector(selectTravelSchedules);
  const [editTravelPost] = useEditTravelPostMutation();
  const router = useRouter();

  const onSubmitHandler = async () => {
    editTravelPost({
      title: travelEditTitle,
      destination: travelEditDestination,
      dayDetail: travelSchedules,
      ...travelEditDateRange,
    });

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
