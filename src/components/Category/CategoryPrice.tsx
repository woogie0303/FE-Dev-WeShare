import { SelectedCategoryType } from '@/types/CategoryType';

type Props = {
  setPriceRange: React.Dispatch<
    React.SetStateAction<Pick<SelectedCategoryType, 'priceRange'>>
  >;
};

export default function CategoryPrice({ setPriceRange }: Props) {
  return (
    <div className="flex flex-col">
      <p className="mb-2 text-xl font-bold">금액</p>
      <div className="space-x-2">
        <input
          onChange={(e) => {
            setPriceRange((pre) => ({
              priceRange: { ...pre?.priceRange, startPrice: e.target.value },
            }));
          }}
          type="number"
          className="rounded-xl p-2 "
        />
        <span>~</span>
        <input
          type="number"
          onChange={(e) => {
            setPriceRange((pre) => ({
              priceRange: { ...pre?.priceRange, endPrice: e.target.value },
            }));
          }}
          className="rounded-xl p-2"
        />
      </div>
    </div>
  );
}
