import {
  DayDetailType,
  PlaceItemType,
  SchedulesType,
  UserActivityType,
} from '@/types/TravelType';

type FetchResponse<T> = {
  state: number;
  data: T;
  message: null | string;
};

class Schedule {
  private scheduleId: number;

  private title: string;

  private startDate: string;

  private endDate: string;

  private createdDate: string;

  private dayDetail: DayDetailType<PlaceItemType>[];

  private userActivity: UserActivityType;

  constructor(res: FetchResponse<SchedulesType<DayDetailType<PlaceItemType>>>) {
    this.scheduleId = res.data.scheduleId;
    this.title = res.data.title;
    this.startDate = res.data.startDate;
    this.endDate = res.data.endDate;
    this.createdDate = res.data.createdDate;
    this.dayDetail = res.data.dayDetail.map((day) => day);
    this.userActivity = {
      likeCount: res.data.likeCount,
      commentCount: res.data.commentCount,
      userName: res.data.userName,
    };
  }

  public IsPatch() {
    return this.dayDetail.every((day) => day.travelDateId !== undefined);
  }

  public get UserActivity() {
    return this.userActivity;
  }

  public get Title() {
    return this.title;
  }

  public get StartDate() {
    return this.startDate;
  }

  public get EndDate() {
    return this.endDate;
  }

  public get CreatedDate() {
    return this.createdDate;
  }

  public get ScheduleId() {
    return this.scheduleId;
  }

  public get DayDetail() {
    return this.dayDetail;
  }
}

export { Schedule };
