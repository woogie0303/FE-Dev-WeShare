import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type Props = {
  children: React.JSX.Element;
};

export default function ModalForm({ children }: Props) {
  const height = window.scrollY;
  const router = useRouter();

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${height}px;
      overflow-y: scroll;
      width: 100%;
    `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, [height]);

  return (
    <div className=" fixed flex justify-center items-center w-full  h-full top-0 left-0 z-30">
      {/* BackDrop */}
      <div
        role="presentation"
        className=" absolute w-full h-full bg-gray-400 opacity-[0.7] -z-10 "
        onClick={router.back}
      />
      {children}
    </div>
  );
}
