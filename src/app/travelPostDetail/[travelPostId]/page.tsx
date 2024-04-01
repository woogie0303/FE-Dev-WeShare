import TravelPostDetail from '@/components/TravelPostDetail';

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

  return travelPostData.json();
};

export default async function Page({ params }: Params) {
  const travelPostDetailData = await fetchSchedulePost(params.travelPostId);

  return (
    <div className="flex h-full p-10 gap-10 pt-[8rem]">
      <TravelPostDetail travelPostDetailData={travelPostDetailData.data} />
    </div>
  );
}
