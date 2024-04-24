import {
  DayDetailType,
  PlaceItemType,
  SchedulesType,
} from '@/types/TravelType';

type FetchResponse<T> = {
  state: number;
  data: T;
  message: null | string;
};

class TravelEdit {
  constructor(
    res: FetchResponse<SchedulesType<DayDetailType<PlaceItemType>>>,
  ) {}
}
