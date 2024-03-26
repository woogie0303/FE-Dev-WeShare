import TravelMap from '@/components/TravelMap';
import TravelPostDetail from '@/components/TravelPostDetail';
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/16/solid';

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
      <div className="flex flex-col basis-1/2">
        <TravelMap />
        <div className="flex justify-between items-center font-bold  text-primary mt-5">
          {/* User */}
          <div className="flex">
            <UserIcon className="w-6" />
            <p>{travelPostData.data.userName}</p>
          </div>
          {/* Like, Comment */}
          <div className="flex gap-1">
            <div className="flex cursor-pointer">
              <HeartIcon className="w-6 cursor-pointer" />
              <p>10</p>
            </div>
            <div className="flex cursor-pointer">
              <ChatBubbleBottomCenterTextIcon className="w-6 cursor-pointer" />
              <p>20</p>
            </div>
          </div>
        </div>
      </div>
      <TravelPostDetail travelPostData={travelPostData.data} />
    </div>
  );
}
