import { ReactNode } from 'react';

type Props = {
  title: string;
  onClose: () => void;
  onCheck: () => void;
  children: string | ReactNode;
};

export default function BaseModal({
  onClose,
  title,
  children,
  onCheck,
}: Props) {
  const handleOnCloseClick = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };
  const handelOnCheckClick = () => {
    if (typeof onCheck === 'function') {
      onCheck();
    }
  };
  return (
    <div className="fixed top-2 left-1/2 z-50 translate-x-[-50%] p-5 rounded-xl flex flex-col gap-4 items-center bg-secondary text-white">
      <div className="text-2xl">
        <h1 className="">{title}</h1>
      </div>
      <div className="Modal-content">{children}</div>
      <div className="">
        <button
          type="button"
          className="bg-third p-2 rounded mx-2 hover:bg-primary"
          onClick={handelOnCheckClick}
        >
          확인
        </button>
        <button
          type="button"
          className="bg-third p-2 rounded mx-2 hover:bg-primary"
          onClick={handleOnCloseClick}
        >
          취소
        </button>
      </div>
    </div>
  );
}
