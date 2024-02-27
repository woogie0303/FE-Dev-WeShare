import React from 'react';
import TravelPlaceSearch from './TravelPlaceSearch';

export default function TravelEditListItemForm() {
  return (
    <form className="bg-third flex flex-col px-10 h-full p-4 font-bold">
      <TravelPlaceSearch />
      <label htmlFor="hour" className="mb-2">
        시간
      </label>
      <button type="button" className="bg-white p-2 rounded-lg mb-4 self-start">
        설정하기
      </button>
      <label htmlFor="cost" className="mb-2">
        비용
      </label>
      <button type="button" className="bg-white p-2 rounded-lg mb-4 self-start">
        설정하기
      </button>
      <label htmlFor="memo" className="mb-2">
        메모
      </label>
      <textarea
        id="memo"
        rows={5}
        className="p-2 mb-4 h-[10rem] rounded-lg font-normal"
      />
      <div className="self-end mt-4">
        <button
          type="submit"
          className="mr-2 bg-primary p-2 rounded-lg text-white"
        >
          추가하기
        </button>
        <button type="button" className="bg-primary p-2 rounded-lg text-white">
          취소
        </button>
      </div>
    </form>
  );
}
