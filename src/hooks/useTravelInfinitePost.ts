import { useGetTravelPostQuery } from '@/store/Travel/travelApi.slice';
import { useEffect, useState } from 'react';

const isNoEmptyArray = (array: unknown[]) => {
  return !!(array && array.length && array.length > 0);
};

const useTravelInfintiePost = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [combineData, setCombineData] = useState<unknown>([]);
  const { data } = useGetTravelPostQuery(currentPage);

  useEffect(() => {
    if (isNoEmptyArray(data)) {
      if (currentPage === 1) {
        setCombineData(data);
      }

      if (currentPage === data.page) {
        setCombineData((pre) => [...pre, ...data]);
      }
    }
  }, [data]);

  const fetchNextPage = () => {
    if (currentPage < data.maxPage && currentPage === data.page) {
      setCurrentPage((pre) => pre + 1);
    }
  };
};
