import React from 'react';

type Props = {
  children: React.JSX.Element;
};

export default function ModalForm({ children }: Props) {
  return (
    <div className="fixed flex  justify-center items-center w-full  h-full top-0 z-30">
      {/* BackDrop */}
      <div className=" absolute w-full h-full bg-gray-400 opacity-[0.7] -z-10 " />
      {children}
    </div>
  );
}
