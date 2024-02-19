import TravelPosts from '@/components/TravelPosts';

const DUMMY_DATA = [
  {
    title: 'hi',
    user: {
      id: 'kang1513',
      profilePath: 'skldfjsdf',
    },
    price: 1000,
    likeNum: 3,
    commentNum: 2,
    imageUrl:
      'https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck=',
  },
  {
    title: 'hi',
    user: {
      id: 'asdg15123',
      profilePath: 'skldfjsdf',
    },
    price: 1000,
    likeNum: 3,
    commentNum: 2,
    imageUrl:
      'https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck=',
  },
  {
    title: 'hi',
    user: {
      id: 'assd',
      profilePath: 'skldfjsdf',
    },
    price: 1000,
    likeNum: 3,
    commentNum: 2,
    imageUrl:
      'https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck=',
  },
  {
    title: 'hi',
    user: {
      id: '124124',
      profilePath: 'skldfjsdf',
    },
    price: 1000,
    likeNum: 3,
    commentNum: 2,
    imageUrl:
      'https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck=',
  },
  {
    title: 'hi',
    user: {
      id: '12jkljsdf',
      profilePath: 'skldfjsdf',
    },
    price: 1000,
    likeNum: 3,
    commentNum: 2,
    imageUrl:
      'https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck=',
  },
  {
    title: 'hi',
    user: {
      id: 'lkjdlkfjsdlkf',
      profilePath: 'skldfjsdf',
    },
    price: 1000,
    likeNum: 3,
    commentNum: 2,
    imageUrl:
      'https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck=',
  },
];

export default function Page() {
  return (
    <div className="px-20 flex flex-col justify-center items-center">
      <TravelPosts posts={DUMMY_DATA} />
      <TravelPosts posts={DUMMY_DATA} />
    </div>
  );
}
