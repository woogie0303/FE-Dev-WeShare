type Props = {
  activeLocal: string | undefined;
  setIsActiveLocal: React.Dispatch<React.SetStateAction<string>>;
};

const metroPolitanNames = [
  '서울',
  '경기',
  '강원도',
  '충청도',
  '전라도',
  '경상도',
  '제주도',
];

export default function CategoryDestination({
  activeLocal,
  setIsActiveLocal,
}: Props) {
  return (
    <div>
      <p className="mb-2 text-xl font-bold">지역</p>
      {metroPolitanNames.map((name) => (
        <button
          type="button"
          className={`${activeLocal === name ? 'bg-primary' : 'bg-secondary'} p-2 text-white mr-2 rounded-xl`}
          key={name}
          onClick={() => {
            setIsActiveLocal(name);
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
