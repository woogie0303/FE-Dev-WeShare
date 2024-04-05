/* eslint-disable import/no-extraneous-dependencies */
import {
  DayDetailType,
  PlaceItemType,
  SchedulesType,
} from '@/types/TravelType';
import { DateRangeType } from '@/utils/dayjs';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { isEqual } from 'lodash';
import type { RootState } from '../store';

type TravelDateRangeType = Pick<
  SchedulesType<DayDetailType<PlaceItemType>>,
  'startDate' | 'endDate'
>;

type TravelEditSliceState = {
  title: string;
  destination: string;
  travelDateRange: TravelDateRangeType;
  travelSchedules: DayDetailType<PlaceItemType>[];
  activeTravelSchedule: DayDetailType<PlaceItemType>;
  editListItem: PlaceItemType | undefined;
};

const initialState: TravelEditSliceState = {
  title: '',
  destination: '',
  travelDateRange: { startDate: '', endDate: '' },
  travelSchedules: [],
  activeTravelSchedule: { travelDate: '', places: [] },
  editListItem: undefined,
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
      }).reduce((acc: DayDetailType<PlaceItemType>[], _, index) => {
        const travelDate = startDate!
          .clone()
          .add(index, 'day')
          .format('YYYY-MM-DD');
        acc.push({ travelDate, places: [] });
        return acc;
      }, []);

      state.travelSchedules = dateRange;
    },
    resetTravelSchedules: (state) => {
      state.travelSchedules = [];
      state.activeTravelSchedule = { travelDate: '', places: [] };
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
    removeActiveTravelItem: (state, action: PayloadAction<PlaceItemType>) => {
      const findActiveScheduleIndex = state.travelSchedules.findIndex(
        (travelSchedule) =>
          travelSchedule.travelDate === state.activeTravelSchedule.travelDate,
      );
      const removeActiveSchedule = state.activeTravelSchedule.places.filter(
        (visitPlace) => !isEqual(visitPlace, action.payload),
      );

      state.activeTravelSchedule.places = removeActiveSchedule;
      state.travelSchedules[findActiveScheduleIndex].places =
        removeActiveSchedule;
    },
    addActiveTravelItem: (state, action: PayloadAction<PlaceItemType>) => {
      const findActiveScheduleIndex = state.travelSchedules.findIndex(
        (travelSchedule) =>
          travelSchedule.travelDate === state.activeTravelSchedule.travelDate,
      );
      state.activeTravelSchedule.places.push(action.payload);
      state.activeTravelSchedule.places.sort((a, b) => {
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
    setTravelTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setTravelDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    changeEditListItem: (
      state,
      action: PayloadAction<PlaceItemType | undefined>,
    ) => {
      state.editListItem = action.payload;
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
  setTravelTitle,
  setTravelDestination,
  changeEditListItem,
} = travelEditSlice.actions;
export const selectTravelActiveSchedule = (state: RootState) =>
  state.travelEdit.activeTravelSchedule;
export const selectTravelSchedules = (state: RootState) =>
  state.travelEdit.travelSchedules;
export const selectTravelEditDateRange = (state: RootState) =>
  state.travelEdit.travelDateRange;
export const selectTravelEditTitle = (state: RootState) =>
  state.travelEdit.title;
export const selectTravelEditDestination = (state: RootState) =>
  state.travelEdit.destination;
export const selectEditListItem = (state: RootState) =>
  state.travelEdit.editListItem;

export default travelEditSlice.reducer;
