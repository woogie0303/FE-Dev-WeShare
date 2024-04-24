// eslint-disable-next-line import/no-extraneous-dependencies
import { isEqual } from 'lodash';
import { useState } from 'react';

const MAX_PAGE = 3;

export const useCurrentPageSection = <T>(pageDataArr: T[]) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageArr, setCurrentPageArr] = useState(() =>
    pageDataArr.slice(0, MAX_PAGE),
  );

  const handleNextPagination = () => {
    if (currentPage >= pageDataArr.length - 1) return;

    setCurrentPage((pre) => pre + 1);

    if (currentPage % MAX_PAGE === MAX_PAGE - 1) {
      setCurrentPageArr(
        pageDataArr.slice(currentPage + 1, currentPage + MAX_PAGE + 1),
      );
    }
  };

  const handlePrevPagination = () => {
    if (currentPage <= 0) return;

    setCurrentPage((pre) => pre - 1);

    if (currentPage % MAX_PAGE === 0) {
      setCurrentPageArr(pageDataArr.slice(currentPage - MAX_PAGE, currentPage));
    }
  };

  const handleOnClickPagination = (index: number) => {
    const activePageNum = pageDataArr.findIndex((data) =>
      isEqual(data, currentPageArr[index]),
    );
    setCurrentPage(activePageNum);
  };

  return {
    handleNextPagination,
    handlePrevPagination,
    handleOnClickPagination,
    currentPage,
    currentPageArr,
  };
};
