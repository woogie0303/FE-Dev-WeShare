import { TravelPostType } from '@/types/TravelType';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const travelPostAdapter = createEntityAdapter({
  selectId: (post: TravelPostType) => post.scheduleId,
  sortComparer: (a, b) => b.scheduleId - a.scheduleId,
});

const travelPostSlice = createSlice({
  name: 'travelPost',
  initialState: travelPostAdapter.getInitialState(),
  reducers: {
    addTravelPost: travelPostAdapter.addMany,
  },
});

export default travelPostSlice.reducer;

export const travelPostSelector = travelPostAdapter.getSelectors<RootState>(
  (state) => state.travelPost,
);

export const { addTravelPost } = travelPostSlice.actions;
