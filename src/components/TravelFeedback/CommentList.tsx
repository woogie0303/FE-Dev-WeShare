import React from 'react';
import { useGetTravelCommentQuery } from '@/store/travel/travelFeedbackApi.slice';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';

type Props = {
  scheduleId: number;
};

export default function CommentList({ scheduleId }: Props) {
  const { data } = useGetTravelCommentQuery(scheduleId);

  return (
    <div className="basis-1/2 bg-third p-10 flex flex-col">
      <div className="h-full overflow-scroll">
        {data?.content.length ? (
          data.content.map((item) => (
            <CommentItem key={item} commentItem={item} />
          ))
        ) : (
          <div> 첫 댓글을 작성해 보세요</div>
        )}
      </div>
      <CommentInput scheduleId={scheduleId} />
    </div>
  );
}
