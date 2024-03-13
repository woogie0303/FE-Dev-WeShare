import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface InitialStateType {
  travelKakaoMap: kakao.maps.Map | undefined;
  mapMarkers: MapMarkerType[];
  previewMapMarker: MapMarkerType | undefined;
}

const initialState: InitialStateType = {
  travelKakaoMap: undefined,
  mapMarkers: [],
  previewMapMarker: undefined,
};

const travelMapSlice = createSlice({
  name: 'travelEdit',
  initialState,
  reducers: {
    setTravelMap: (state, action: PayloadAction<kakao.maps.Map>) => {
      const travelMap = action.payload;
      state.travelKakaoMap = travelMap;
    },
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

export const { setPreviewMarkerLocation } = travelMapSlice.actions;
export const { resetMarkerLocation } = travelMapSlice.actions;
export const { setTravelMap } = travelMapSlice.actions;
export const { setMarkersLocation } = travelMapSlice.actions;
export const selectPreviewMarker = (state: RootState) =>
  state.travelMap.previewMapMarker;
export const selectTravelKakaoMap = (state: RootState) =>
  state.travelMap.travelKakaoMap;
export const selectMapMarker = (state: RootState) => state.travelMap.mapMarkers;
export default travelMapSlice.reducer;
