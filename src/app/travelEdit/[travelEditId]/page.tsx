import TravelEdit from '@/components/TravelEdit';

type Params = {
  params: { travelEditId: string };
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
  const travelPostDetailData = await fetchSchedulePost(params.travelEditId);

  return (
    <div className="flex gap-[5rem] pt-[8rem] p-12 h-full">
      <TravelEdit travelPostDetailData={travelPostDetailData.data} />
    </div>
  );
}
