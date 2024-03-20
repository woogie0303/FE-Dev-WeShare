import { useAppDispatch } from '@/store/hook';
import { store } from '@/store/store';
import { useGetTravelPostQuery } from '@/store/travel/travelApi.slice';
import {
  addTravelPost,
  travelPostSelector,
} from '@/store/travel/travelPost.slice';
import { TravelPostType } from '@/types/TravelType';
import { useEffect, useRef, useState } from 'react';

const isNoEmptyArray = (array: TravelPostType[]) => {
  return !!(array && array.length && array.length > 0);
};

export const useTravelInfinitePost = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { data } = useGetTravelPostQuery(currentPage);
  const travelPostData = travelPostSelector.selectAll(store.getState());
  const observerElement = useRef<HTMLDivElement>(null);

  const fetchNextPage = () => {
    if (
      data &&
      currentPage <= data.totalPages &&
      data.pageable.pageNumber === currentPage
    ) {
      setCurrentPage((pre) => pre + 1);
    }
  };

  useEffect(() => {
    if (!data) return;
    if (isNoEmptyArray(data.content)) {
      dispatch(addTravelPost(data.content));
    }
  }, [data, dispatch]);

  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entires) => {
      const [target] = entires;

      if (target.isIntersecting) {
        fetchNextPage();
      }
    };

    const curElem = observerElement.current;
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });

    if (curElem) observer.observe(curElem);

    return () => {
      if (curElem) observer.unobserve(curElem);
    };
  });

  return { travelPostData, observerElement };
};
