type Props = {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SignUpSuccess({ setShowSignIn }: Props) {
  return (
    <div className="flex w-[25rem] bg-white h-[40rem] mx-auto flex-col border-2 border-solid items-center justify-evenly rounded-[4rem]">
      <h2 className="text-center text-4xl font-bold text-blue-500">
        회원가입 완료
      </h2>
      <p className="text-2xl font-bold text-blue-200">
        <span className="mx-2 text-blue-500 ">weShare,</span>
        함께 나눠봐요
      </p>

      <button
        type="button"
        className=" mb-6 mt-8  w-[10rem] rounded-3xl bg-blue-200 py-3 font-semibold leading-8 text-white transition duration-500 ease-in-out hover:bg-blue-500"
        onClick={() => {
          setShowSignIn(true);
        }}
      >
        로그인하러 가기
      </button>
    </div>
  );
}
