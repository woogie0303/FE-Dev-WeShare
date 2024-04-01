import { TravelPostDetailDayDetailType } from '@/types/TravelType';
import { useMemo, useState } from 'react';

const MAX_PAGE = 3;

export const useCurrentPageSection = (
  pageDataArr: TravelPostDetailDayDetailType[],
) => {
  const newDayDetail = useMemo(
    () => pageDataArr.map((data, index) => ({ ...data, numDate: index + 1 })),
    [pageDataArr],
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageArr, setCurrentPageArr] = useState(() =>
    newDayDetail.slice(0, MAX_PAGE),
  );

  const handleNextPagination = () => {
    if (currentPage > pageDataArr.length - 1) return;

    setCurrentPage((pre) => pre + 1);

    if (currentPage % MAX_PAGE === 0) {
      setCurrentPageArr(
        newDayDetail.slice(currentPage, currentPage + MAX_PAGE),
      );
    }
  };

  const handlePrevPagination = () => {
    if (currentPage <= 1) return;

    setCurrentPage((pre) => pre - 1);

    if (currentPage % MAX_PAGE === 1) {
      setCurrentPageArr(
        newDayDetail.slice(currentPage - MAX_PAGE - 1, currentPage - 1),
      );
    }
  };

  return {
    handleNextPagination,
    handlePrevPagination,
    currentPage,
    currentPageArr,
    setCurrentPage,
  };
};
