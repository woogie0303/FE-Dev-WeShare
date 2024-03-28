'use client';

import React, { useState } from 'react';

import TravelPostDetailList from './TravelPostDetailList';
import TravelMap from '../TravelMap';
import TravelFeedback from '../TravelFeedback';
import CommentList from '../TravelFeedback/CommentList';

type Props = {
  travelPostData: any;
};

export default function TravelPostDetail({ travelPostData }: Props) {
  const [commentIsOpen, setCommentIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col basis-1/2">
        <TravelMap />
        <TravelFeedback setCommentIsOpen={setCommentIsOpen} />
      </div>
      {commentIsOpen ? (
        <CommentList scheduleId={travelPostData.id} />
      ) : (
        <TravelPostDetailList travelPostData={travelPostData} />
      )}
    </>
  );
}
