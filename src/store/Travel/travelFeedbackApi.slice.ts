import {
  TravelCommentType,
  TravelCommentResponseType,
} from '@/types/TravelType';
import { apiSlice } from '../api/apiSlice';

const travelFeedbackApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTravelComment: builder.query<
      TravelCommentResponseType<TravelCommentType>,
      number
    >({
      providesTags: ['TravelComment'],
      query: (scheduleId) => ({
        url: `/api/v1/trip/schedules/${scheduleId}/comments`,
      }),
    }),
    postTravelComment: builder.mutation<
      void,
      Pick<TravelCommentType, 'scheduleId' | 'content'>
    >({
      query: (feedback) => ({
        url: `/api/v1/trip/schedules/${feedback.scheduleId}/comments`,
        method: 'POST',
        body: {
          content: feedback.content,
        },
      }),
      invalidatesTags: ['TravelComment'],
    }),
  }),
});

export const { usePostTravelCommentMutation, useGetTravelCommentQuery } =
  travelFeedbackApiSlice;
