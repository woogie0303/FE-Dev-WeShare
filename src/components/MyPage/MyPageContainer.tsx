import MyPageNav from './MyPageNav';
import MyPagePost from './MyPagePost';

const DUMMY_DATA = [1, 2, 3, 4, 5, 6];

export default function MyPageContainer() {
  return (
    <>
      <MyPageNav />
      <div className="w-full flex flex-wrap gap-4 justify-center p-4">
        {DUMMY_DATA.map((item) => (
          <MyPagePost key={item} />
        ))}
      </div>
    </>
  );
}
