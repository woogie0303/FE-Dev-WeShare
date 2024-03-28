import { apiSlice } from '../api/apiSlice';

const travelFeedbackApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTravelComment: builder.query({
      providesTags: ['TravelComment'],
      query: (scheduleId) => ({
        url: `/api/v1/trip/schedules/${scheduleId}/comments`,
      }),
    }),
    postTravelComment: builder.mutation({
      query: (feedback) => ({
        url: `/api/v1/trip/schedules/${feedback.scheduleId}/comments`,
        method: 'POST',
        body: {
          content: feedback.comment,
        },
      }),
      invalidatesTags: ['TravelComment'],
    }),
  }),
});

export const { usePostTravelCommentMutation, useGetTravelCommentQuery } =
  travelFeedbackApiSlice;
