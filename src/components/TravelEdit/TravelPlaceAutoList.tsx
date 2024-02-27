import React from 'react';

type Props = {
  autoCompleteLists: SearchPlace[];
};

export default function TravelPlaceAutoList({ autoCompleteLists }: Props) {
  return (
    <ul className="absolute bg-[#eef1fe] text-[#626262] w-full top-full rounded-lg max-h-[20rem] overflow-scroll">
      {autoCompleteLists.map((autoList) => {
        return (
          <li
            key={autoList.id}
            className="p-5 group cursor-pointer hover:bg-[#6785ff] hover:text-white flex justify-between items-center"
          >
            <div className="">
              <p className="mb-2">{autoList.place_name}</p>
              <p className="text-light text-sm">{autoList.address_name}</p>
            </div>
            <button
              type="button"
              className="hidden p-2 opacity-50 bg-white text-[#6785ff] group-hover:block rounded-lg hover:opacity-100"
            >
              미리보기
            </button>
          </li>
        );
      })}
    </ul>
  );
}
