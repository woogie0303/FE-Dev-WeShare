import React from 'react';
import {
  useGetTravelCommentQuery,
  usePostTravelCommentMutation,
} from '@/store/travel/travelFeedbackApi.slice';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hook';
import { selectToken } from '@/store/auth/auth.slice';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';

type Props = {
  scheduleId: number;
};

export default function CommentList({ scheduleId }: Props) {
  const { data } = useGetTravelCommentQuery(scheduleId);
  const accessToken = useAppSelector(selectToken);
  const [postComment] = usePostTravelCommentMutation();
  const router = useRouter();
  const commentPostHandler = (text: string) => {
    if (accessToken) {
      postComment({
        scheduleId,
        content: text,
      });
    } else {
      router.push('/login');
    }
  };

  return (
    <>
      <div className="relative h-full p-10 overflow-scroll">
        {data?.content.length ? (
          data.content.map((item) => (
            <CommentItem key={item.commentId} commentItem={item} />
          ))
        ) : (
          <div> 첫 댓글을 작성해 보세요</div>
        )}
      </div>
      <CommentInput commentPostHandler={commentPostHandler} />
    </>
  );
}
