import React from 'react';
import CategoryDestination from './CategoryDestination';
import CategoryPrice from './CategoryPrice';

type Props = {};

export default function Category({}: Props) {
  return (
    <form className=" flex flex-col bg-third gap-4 px-36 py-4">
      <CategoryDestination />
      <CategoryPrice />
      <div className="self-end">
        <button
          type="button"
          className="p-2 bg-secondary text-white rounded-md mr-4"
        >
          확인
        </button>
        <button
          type="button"
          className="p-2 bg-secondary text-white rounded-md"
        >
          취소
        </button>
      </div>
    </form>
  );
}
