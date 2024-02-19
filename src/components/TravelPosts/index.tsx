import React from 'react';
import TravelPost from './TravelPost';

type Props = {
  posts: TPosts[];
};

export default function TravelPosts({ posts }: Props) {
  return (
    <div className="grid grid-cols-4 gap-y-4  w-full min-h-[30rem] mt-[5rem]">
      {posts.map((post) => (
        <TravelPost key={post.user.id} post={post} />
      ))}
    </div>
  );
}
