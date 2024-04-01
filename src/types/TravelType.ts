interface SelectedPlaceType {
  title: string;
  longitude: number;
  latitude: number;
}

interface EditListItemType extends SelectedPlaceType {
  time: string;
  memo: string;
  expense: number;
}

interface TravelEditPostType extends TravelDateRangeType {
  title: string;
  destination: string;
  visitDates: VisitDatesType<EditListItemType>[];
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

interface TravelPostSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface TravelPageableType {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: TravelPostSort;
}

interface TravelPostResponseType<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: TravelPageableType;
  size: number;
  sort: TravelPostSort;
  totalElements: number;
  totalPages: number;
}

interface TravelPostType {
  likesCount: number;
  commentsCount: number;
  createdDate: string;
  expense: number;
  scheduleId: number;
  userName: string;
}

interface TravelPostDetailDayDetailType {
  travelDate: string;
  places: EditListItemType[];
  totalDayPrice: number;
}

interface TravelPostDetailType {
  id: number;
  title: string;
  destination: string;
  userName: string;
  startDate: string;
  endDate: string;
  createdDate: string;
  dayDetail: TravelPostDetailDayDetailType[];
}

interface TravelCommentResponseType<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: TravelPageableType;
  size: number;
  sort: TravelPostSort;
  totalElements: number;
  totalPages: number;
}

interface TravelCommentType {
  commentId: number;
  commenterName: string;
  content: string;
  createdDate: string;
  scheduleId?: number;
}

export type {
  SelectedPlaceType,
  EditListItemType,
  VisitDatesType,
  MapMarkerType,
  TravelDateRangeType,
  TravelPostResponseType,
  TravelPostType,
  TravelPostDetailType,
  TravelPostDetailDayDetailType,
  TravelEditPostType,
  TravelCommentResponseType,
  TravelCommentType,
};
