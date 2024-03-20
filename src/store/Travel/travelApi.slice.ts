import { TravelPostResponseType, TravelPostType } from '@/types/TravelType';
import { apiSlice } from '../api/apiSlice';
import { addTravelPost } from './travelPost.slice';
import type { RootState } from '../store';

const travelApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTravelPost: builder.query<
      Pick<
        TravelPostResponseType<TravelPostType>,
        'content' | 'last' | 'pageable' | 'totalPages'
      >,
      number
    >({
      query: (page) => ({
        url: `/api/v1/trip/schedules?page=${page}&size=12`,
        method: 'GET',
      }),
      transformResponse: (data: TravelPostResponseType<TravelPostType>) => {
        const { content, last, pageable, totalPages } = data;

        return { content, last, pageable, totalPages };
      },
      async onQueryStarted(page, { queryFulfilled, dispatch }) {
        const data = await queryFulfilled;

        if (data && page === 0) {
          dispatch(addTravelPost(data.data.content));
        }
      },
    }),
    editTravelPost: builder.mutation({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        const state = api.getState() as RootState;
        const travelEditState = state.travelEdit;

        const data = await baseQuery({
          url: '/api/v1/trip/schedules',
          method: arg,
          body: {
            title: travelEditState.title,
            destination: travelEditState.destination,
            visitDates: travelEditState.travelSchedules,
            ...travelEditState.travelDateRange,
          },
        });

        return data;
      },
    }),
  }),
});

export const { useGetTravelPostQuery, useEditTravelPostMutation } =
  travelApiSlice;
