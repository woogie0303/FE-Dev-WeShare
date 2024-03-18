interface SelectedPlaceType {
  title: string;
  longitude: number;
  latitude: number;
}

interface EditListItemType {
  title: string;
  time: string;
  memo: string;
  expense: number;
  latitude: number;
  longitude: number;
}

interface VisitDatesType<T> {
  travelDate: string;
  visitPlaces: T[];
}

interface MapMarkerType {
  latitude: number;
  longitude: number;
}

interface TravelDateRangeType {
  startDate: string;
  endDate: string;
}

export type {
  SelectedPlaceType,
  EditListItemType,
  VisitDatesType,
  MapMarkerType,
  TravelDateRangeType,
};
