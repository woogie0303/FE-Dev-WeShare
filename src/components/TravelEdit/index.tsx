import React from 'react';
import TravelEditList from './TravelEditList';
import TravelEditListItemForm from './TravelEditListItemForm';

export default function TravelEdit() {
  return (
    <div className="basis-1/2 ">
      {/* <form className="basis-1/2 flex flex-col h-full ">
        <input
          type="text"
          className="border-secondary border-b-2 text-2xl  mb-5 py-1 placeholder:text-third "
          placeholder="여행 제목을 입력해주세요"
        />
        <input
          type="text"
          className="border-secondary py-1 border-b-2  w-[12rem] placeholder:text-third"
          placeholder="날짜를 입력해주세요"
        />
        <TravelEditList />
      </form> */}
      <TravelEditListItemForm />
    </div>
  );
}
