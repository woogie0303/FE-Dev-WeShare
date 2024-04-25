interface PlaceItemType {
  title: string;
  longitude: number;
  latitude: number;
  time: string;
  memo: string;
  expense: number;
}

interface SchedulesType<T> {
  title: string;
  destination: string;
  dayDetail: T[];
  scheduleId: number;
  startDate: string;
  endDate: string;
  createdDate: string;
  userName: string;
  commentCount: number;
  likeCount: number;
}

interface DayDetailType<T> {
  travelDate: string;
  places: T[];
  totalDayPrice: number;
  travelDateId: number;
}

interface PageableSortType {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface PageableType {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: PageableSortType;
}

interface PageableResponseType<T> {
  totalPages?: number;
  totalElements?: number;
  size: number;
  content: T[];
  number: number;
  sort: PageableSortType;
  numberOfElements: number;
  pageable: PageableType;
  first: boolean;
  last: boolean;
  empty: boolean;
}

interface TravelPostType {
  title?: string;
  createdAt?: string;
  likesCount: number;
  commentsCount: number;
  createdDate: string;
  expense: number;
  scheduleId: number;
  userName: string;
}

interface TravelCommentType {
  commentId: number;
  commenterName: string;
  content: string;
  createdDate: string;
  scheduleId?: number;
}

interface UserActivityType {
  likeCount: number;
  commentCount: number;
  userName: string;
}

export type {
  PlaceItemType,
  SchedulesType,
  DayDetailType,
  PageableResponseType,
  TravelPostType,
  TravelCommentType,
  UserActivityType,
};
