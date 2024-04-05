'use client';

import withAuth from '../LoginForm/withAuth';
import MyPageNav from './MyPageNav';
import MyPagePost from './MyPagePost';
import UserInfo from './UserInfo';

const DUMMY_DATA = [1, 2, 3, 4, 5, 6];

function MyPage() {
  return (
    <>
      <UserInfo />
      <MyPageNav />
      <div className="w-full flex flex-wrap gap-4 justify-center p-4">
        {DUMMY_DATA.map((item) => (
          <MyPagePost key={item} />
        ))}
      </div>
    </>
  );
}

export default withAuth(MyPage);
