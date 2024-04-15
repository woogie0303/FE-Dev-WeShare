import { useGetTravelPostQuery } from '@/store/travel/travelApi.slice';
import { SelectedCategoryType } from '@/types/CategoryType';
import { TravelPostType } from '@/types/TravelType';
import { useEffect, useRef, useState } from 'react';

const isNoEmptyArray = (array: TravelPostType[]) => {
  return !!(array && array.length && array.length > 0);
};

export const useTravelInfinitePost = (
  selectedCategory: SelectedCategoryType | undefined,
) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [combinedData, setCombinedData] = useState<TravelPostType[]>([]);
  const { data } = useGetTravelPostQuery({
    currentPageNum: currentPage,
    ...selectedCategory,
  });
  const fetchNextPage = () => {
    if (!data?.last && currentPage === data?.pageable.pageNumber) {
      setCurrentPage((pre) => pre + 1);
    }
  };

  const observerElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data && isNoEmptyArray(data.content)) {
      if (data.pageable.pageNumber === 0) {
        setCombinedData(data.content);
      } else if (currentPage === data.pageable.pageNumber) {
        setCombinedData((pre) => [...pre, ...data.content]);
      }
    }
  }, [currentPage, data]);

  // 고쳐야 할 부분
  useEffect(() => {
    if (selectedCategory) {
      setCombinedData([]);
      setCurrentPage(0);
    }
  }, [selectedCategory]);

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

  return { combinedData, observerElement };
};
