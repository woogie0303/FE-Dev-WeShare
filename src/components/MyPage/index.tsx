'use client';

import { useState } from 'react';
import { useGetMyTravelPostQuery } from '@/store/travel/travelApi.slice';
import withAuth from '../LoginForm/withAuth';
import MyPageNav from './MyPageNav';
import MyPagePost from './MyPagePost';
import UserInfo from './UserInfo';

function MyPage() {
  const [activeNav, setActiveNav] = useState('schedules');
  const { data } = useGetMyTravelPostQuery(activeNav);

  return (
    <>
      <UserInfo />
      <MyPageNav activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className="w-full flex flex-wrap gap-4 justify-center p-4">
        {data?.map((myPost) => (
          <MyPagePost key={myPost.scheduleId} myPost={myPost} />
        ))}
      </div>
    </>
  );
}

export default withAuth(MyPage);
