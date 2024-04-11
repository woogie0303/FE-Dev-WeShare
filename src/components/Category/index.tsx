import React, { useState } from 'react';
import { SelectedCategoryType } from '@/types/CategoryType';
import { useCategoryContext } from '@/contexts/CategoryProvider';
import CategoryDestination from './CategoryDestination';
import CategoryPrice from './CategoryPrice';

export default function Category() {
  const [priceRange, setPriceRange] = useState<
    Pick<SelectedCategoryType, 'priceRange'>
  >({
    priceRange: { startPrice: '', endPrice: '' },
  });
  const { setSelectedCategory } = useCategoryContext();
  const [activeLocal, setIsActiveLocal] = useState<string>('');

  const categorySubmitHandler = () => {
    setSelectedCategory({
      destination: activeLocal,
      priceRange: { ...priceRange?.priceRange },
    });
  };

  return (
    <form
      className=" flex flex-col bg-third gap-4 px-36 py-4"
      onSubmit={(e) => {
        e.preventDefault();
        categorySubmitHandler();
      }}
    >
      <CategoryDestination
        activeLocal={activeLocal}
        setIsActiveLocal={setIsActiveLocal}
      />
      <CategoryPrice setPriceRange={setPriceRange} />
      <div className="self-end">
        <button
          type="submit"
          className="p-2 bg-secondary text-white rounded-md mr-4"
        >
          확인
        </button>
        <button
          type="button"
          className="p-2 bg-secondary text-white rounded-md"
        >
          취소
        </button>
      </div>
    </form>
  );
}
