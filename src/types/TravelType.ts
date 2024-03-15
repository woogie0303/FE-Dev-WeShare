interface SelectedPlaceType {
  title: string;
  longitude: number;
  latitude: number;
}

interface EditListItem {
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

export type { SelectedPlaceType, EditListItem, VisitDatesType, MapMarkerType };
