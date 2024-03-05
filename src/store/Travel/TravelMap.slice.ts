import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface MapMarkerType {
  latitude: string;
  longitude: string;
}

interface InitialStateType {
  mapMarkers: MapMarkerType[];
  previewMapMarker: MapMarkerType | undefined;
}

const initialState: InitialStateType = {
  mapMarkers: [],
  previewMapMarker: undefined,
};

const travelMapSlice = createSlice({
  name: 'travelEdit',
  initialState,
  reducers: {
    setMarkerLocation: (state, action: PayloadAction<MapMarkerType>) => {
      const previewMarker = action.payload;

      state.previewMapMarker = previewMarker;
    },
    resetMarkerLocation: (state) => {
      state.previewMapMarker = undefined;
    },
  },
});

export const { setMarkerLocation } = travelMapSlice.actions;
export const { resetMarkerLocation } = travelMapSlice.actions;
export const selectPreviewMarker = (state: RootState) =>
  state.travelMap.previewMapMarker;

export default travelMapSlice.reducer;
