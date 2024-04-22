import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PlaceItemType } from '@/types/TravelType';
import type { RootState } from '../store';

type MapMarkerType = Pick<PlaceItemType, 'latitude' | 'longitude'>;

interface InitialStateType {
  mapMarkers: MapMarkerType[];
  previewMapMarker: MapMarkerType | undefined;
}

const initialState: InitialStateType = {
  mapMarkers: [],
  previewMapMarker: undefined,
};

const travelMapSlice = createSlice({
  name: 'travelMap',
  initialState,
  reducers: {
    setMarkersLocation(state, action: PayloadAction<MapMarkerType[]>) {
      state.mapMarkers = action.payload;
    },
    setPreviewMarkerLocation: (state, action: PayloadAction<MapMarkerType>) => {
      const previewMarker = action.payload;

      state.previewMapMarker = previewMarker;
    },
    resetMarkerLocation: (state) => {
      state.previewMapMarker = undefined;
    },
  },
});

export const {
  resetMarkerLocation,
  setPreviewMarkerLocation,
  setMarkersLocation,
} = travelMapSlice.actions;

export const selectPreviewMarker = (state: RootState) =>
  state.travelMap.previewMapMarker;
export const selectMapMarker = (state: RootState) => state.travelMap.mapMarkers;
export default travelMapSlice.reducer;
