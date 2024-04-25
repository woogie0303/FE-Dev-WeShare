import TravelMap from '@/components/TravelMap';
import TravelPostDetail from '@/components/TravelPostDetail';
import { Schedule } from '@/service/api/Schedule';

type Params = {
  params: { travelPostId: string };
};

const fetchSchedulePost = async (scheduleId: string) => {
  const travelPostData = await fetch(
    `https://www.uhanuu.site/api/v1/trip/schedules/${scheduleId}`,
    {
      cache: 'no-store',
    },
  );
  const data = await travelPostData.json();

  return new Schedule(data);
};

export default async function Page({ params }: Params) {
  const travelPostDetailData = await fetchSchedulePost(params.travelPostId);

  return (
    <div className="flex h-full p-10 gap-10 pt-[8rem]">
      <div className="flex flex-col basis-1/2">
        <TravelMap />
      </div>
      <TravelPostDetail
        dayDetail={travelPostDetailData.DayDetail}
        scheduleId={travelPostDetailData.ScheduleId}
        userActivity={travelPostDetailData.UserActivity}
      />
    </div>
  );
}
