'use client';

import React, { useState } from 'react';
import { DayDetailType, PlaceItemType } from '@/types/TravelType';
import CommentList from '../TravelFeedback/CommentList';
import TravelPostDetailList from './TravelPostDetailList';
import TravelFeedback from '../TravelFeedback';

type Props = {
  scheduleId: number;
  dayDetail: DayDetailType<PlaceItemType>[];
};

export default function TravelPostDetail({ dayDetail, scheduleId }: Props) {
  const [commentIsOpen, setCommentIsOpen] = useState(false);

  return (
    <div className="flex flex-col basis-1/2 h-full">
      {commentIsOpen ? (
        <CommentList scheduleId={scheduleId} />
      ) : (
        <TravelPostDetailList travelPostDayDetail={dayDetail} />
      )}
      <TravelFeedback setCommentIsOpen={setCommentIsOpen} />
    </div>
  );
}
