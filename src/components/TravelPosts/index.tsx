'use client';

import React from 'react';
import { useTravelInfinitePost } from '@/hooks/useTravelInfinitePost';
import { useCategoryContext } from '@/contexts/CategoryProvider';
import TravelPost from './TravelPost';

export default function TravelPosts() {
  const { selectedCategory } = useCategoryContext();

  const { combinedData, observerElement } =
    useTravelInfinitePost(selectedCategory);

  return (
    <div className="px-20 flex flex-col justify-center">
      <div className="grid grid-cols-4 gap-y-4  w-full  mt-[5rem]">
        {combinedData.map((post, index) => (
          <TravelPost
            key={post.scheduleId}
            post={post}
            ref={combinedData.length - 1 === index ? observerElement : null}
          />
        ))}
      </div>
    </div>
  );
}
