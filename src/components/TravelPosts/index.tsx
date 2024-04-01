'use client';

import React from 'react';
import { useTravelInfinitePost } from '@/hooks/useTravelInfinitePost';
import TravelPost from './TravelPost';

export default function TravelPosts() {
  const { travelPostData, observerElement } = useTravelInfinitePost();

  return (
    <div className="px-20 flex flex-col justify-center items-center">
      <div className="grid grid-cols-4 gap-y-4  w-full  mt-[5rem]">
        {travelPostData.map((post, index) => (
          <TravelPost
            key={post.scheduleId}
            post={post}
            ref={travelPostData.length - 1 === index ? observerElement : null}
          />
        ))}
      </div>
    </div>
  );
}
