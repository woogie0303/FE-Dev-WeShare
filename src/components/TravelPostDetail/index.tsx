'use client';

import React, { useState } from 'react';

import { TravelPostDetailType } from '@/types/TravelType';
import TravelPostDetailList from './TravelPostDetailList';
import TravelMap from '../TravelMap';
import TravelFeedback from '../TravelFeedback';
import CommentList from '../TravelFeedback/CommentList';

type Props = {
  travelPostDetailData: TravelPostDetailType;
};

export default function TravelPostDetail({ travelPostDetailData }: Props) {
  const [commentIsOpen, setCommentIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col basis-1/2">
        <TravelMap />
        <TravelFeedback setCommentIsOpen={setCommentIsOpen} />
      </div>
      {commentIsOpen ? (
        <CommentList scheduleId={travelPostDetailData.id} />
      ) : (
        <TravelPostDetailList
          travelPostDayDetail={travelPostDetailData.dayDetail}
        />
      )}
    </>
  );
}
