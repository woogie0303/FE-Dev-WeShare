import {
  DayDetailType,
  PageableResponseType,
  PlaceItemType,
  SchedulesType,
  TravelPostType,
} from '@/types/TravelType';
import { apiSlice } from '../api/apiSlice';

type TravelPostParams = {
  destination?: string;
  priceRange?: { startPrice: string; endPrice: string };
  currentPageNum: number;
};

const travelApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTravelPost: builder.query<
      Pick<
        PageableResponseType<TravelPostType>,
        'content' | 'last' | 'pageable' | 'totalPages'
      >,
      TravelPostParams
    >({
      query: (travelPost) => ({
        url: `/api/v1/trip/schedules?page=${travelPost.currentPageNum}&size=12${travelPost.destination?.length ? `&destination=${travelPost.destination}` : ''} ${travelPost.priceRange?.startPrice.length || travelPost.priceRange?.endPrice?.length ? `&expense=${travelPost.priceRange.startPrice}~${travelPost.priceRange.endPrice}` : ''}`,
      }),
      transformResponse: (data: PageableResponseType<TravelPostType>) => {
        const { content, last, pageable, totalPages } = data;

        return { content, last, pageable, totalPages };
      },
    }),
    editTravelPost: builder.mutation<
      void,
      SchedulesType<DayDetailType<PlaceItemType>>
    >({
      query: (editTravelPost) => ({
        url: '/api/v1/trip/schedules',
        method: 'POST',
        body: { ...editTravelPost },
      }),
    }),
    getMyTravelPost: builder.query<
      Pick<TravelPostType, 'title' | 'scheduleId' | 'createdAt'>[],
      string
    >({
      query: (myScheduleArg) => ({ url: `/api/v1/me/${myScheduleArg}` }),
      transformResponse: (res: any) => {
        const { content } = res.data;

        return content;
      },
    }),
  }),
});

export const {
  useGetTravelPostQuery,
  useEditTravelPostMutation,
  useGetMyTravelPostQuery,
} = travelApiSlice;
