'use client';

import { SelectedCategoryType } from '@/types/CategoryType';
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

type Props = {
  children: ReactNode;
};

type CategoryContextValueType = {
  selectedCategory: SelectedCategoryType | undefined;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<SelectedCategoryType | undefined>
  >;
};

const CategoryContext = createContext<CategoryContextValueType | undefined>(
  undefined,
);

export default function CategoryContextProvider({ children }: Props) {
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategoryType>();

  const value = useMemo<CategoryContextValueType>(
    () => ({
      selectedCategory,
      setSelectedCategory,
    }),
    [selectedCategory],
  );
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);

  if (context === undefined) {
    throw new Error('useTodoContext must be within TodoProvider');
  }

  return context;
};
