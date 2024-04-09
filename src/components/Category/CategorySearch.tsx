import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React from 'react';

type Props = {};

export default function CategorySearch({}: Props) {
  return (
    <div className="mb-5 text-xl font-bold">
      <label htmlFor="searchTitle">제목 검색</label>
      <div className="flex gap-2 mt-2">
        <input type="text" id="searchTitle" className="rounded-xl" />
        <MagnifyingGlassIcon className="w-5" />
      </div>
    </div>
  );
}
