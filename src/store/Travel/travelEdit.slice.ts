/* eslint-disable import/no-extraneous-dependencies */
import {
  EditListItemType,
  TravelDateRangeType,
  VisitDatesType,
} from '@/types/TravelType';
import { DateRangeType } from '@/utils/dayjs';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { isEqual } from 'lodash';
import type { RootState } from '../store';

type TravelEditSliceState = {
  travelDateRange: TravelDateRangeType;
  travelSchedules: VisitDatesType<EditListItemType>[];
  activeTravelSchedule: VisitDatesType<EditListItemType>;
};

type RemoveTravelItemType = {
  activeDate: string;
  visitPlace: EditListItemType;
};

const initialState: TravelEditSliceState = {
  travelDateRange: { startDate: '', endDate: '' },
  travelSchedules: [],
  activeTravelSchedule: { travelDate: '', visitPlaces: [] },
};

const travelEditSlice = createSlice({
  name: 'travelEdit',
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<TravelDateRangeType>) => {
      state.travelDateRange = action.payload;
    },
    setTravelSchedules: (state, action: PayloadAction<DateRangeType>) => {
      const [startDate, endDate] = action.payload;

      const numDays = endDate!.diff(startDate, 'day') + 1;
      const dateRange = Array.from({
        length: numDays,
      }).reduce((acc: VisitDatesType<EditListItemType>[], _, index) => {
        const travelDate = startDate!
          .clone()
          .add(index, 'day')
          .format('YYYY-MM-DD');
        acc.push({ travelDate, visitPlaces: [] });
        return acc;
      }, []);

      state.travelSchedules = dateRange;
    },
    resetTravelSchedules: (state) => {
      state.travelSchedules = [];
      state.activeTravelSchedule = { travelDate: '', visitPlaces: [] };
      state.travelDateRange = { startDate: '', endDate: '' };
    },
    setActiveTravelSchedule: (state, action: PayloadAction<string>) => {
      const travelSchedule = state.travelSchedules.find(
        (visitDates) => visitDates.travelDate === action.payload,
      );
      if (travelSchedule) {
        state.activeTravelSchedule = travelSchedule;
      }
    },
    removeActiveTravelItem: (
      state,
      action: PayloadAction<RemoveTravelItemType>,
    ) => {
      const findActiveScheduleIndex = state.travelSchedules.findIndex(
        (travelSchedule) =>
          travelSchedule.travelDate === action.payload.activeDate,
      );
      const removeActiveSchedule =
        state.activeTravelSchedule.visitPlaces.filter(
          (visitPlace) => !isEqual(visitPlace, action.payload.visitPlace),
        );

      state.activeTravelSchedule.visitPlaces = removeActiveSchedule;
      state.travelSchedules[findActiveScheduleIndex].visitPlaces =
        removeActiveSchedule;
    },
    addActiveTravelItem: (state, action: PayloadAction<EditListItemType>) => {
      const findActiveScheduleIndex = state.travelSchedules.findIndex(
        (travelSchedule) =>
          travelSchedule.travelDate === state.activeTravelSchedule.travelDate,
      );
      state.activeTravelSchedule.visitPlaces.push(action.payload);
      state.activeTravelSchedule.visitPlaces.sort((a, b) => {
        const timeRegex = /(\d+):(\d+)\s*(AM|PM)/;
        const preMatch = a.time.match(timeRegex);
        const curMatch = b.time.match(timeRegex);

        const [, preHoursStr, preMinutesStr] = preMatch as RegExpMatchArray;
        const [, curHoursStr, curMinutesStr] = curMatch as RegExpMatchArray;

        const totalPreMin = Number(preHoursStr) * 60 + Number(preMinutesStr);
        const totalCurMin = Number(curHoursStr) * 60 + Number(curMinutesStr);

        return totalPreMin - totalCurMin;
      });
      state.travelSchedules[findActiveScheduleIndex] =
        state.activeTravelSchedule;
    },
  },
});

export const {
  setTravelSchedules,
  setActiveTravelSchedule,
  setDateRange,
  removeActiveTravelItem,
  addActiveTravelItem,
  resetTravelSchedules,
} = travelEditSlice.actions;
export const selectTravelEditState = (state: RootState) => state.travelEdit;
export const selectTravelEditDateRange = (state: RootState) =>
  state.travelEdit.travelDateRange;

export default travelEditSlice.reducer;
