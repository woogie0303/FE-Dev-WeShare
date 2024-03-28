import TravelPostDetail from '@/components/TravelPostDetail';

type Params = {
  params: { travelPostId: string };
};

const fetchShedulePost = async (scheduleId: string) => {
  const travelPostData = await fetch(
    `https://www.uhanuu.site/api/v1/trip/schedules/${scheduleId}`,
    {
      cache: 'no-store',
    },
  );

  return travelPostData.json();
};

export default async function page({ params }: Params) {
  const travelPostData = await fetchShedulePost(params.travelPostId);

  return (
    <div className="flex h-full p-10 gap-10">
      <TravelPostDetail travelPostData={travelPostData.data} />
    </div>
  );
}
