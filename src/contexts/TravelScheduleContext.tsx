'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type TravelScheduleContextType = {
  travelScheduleArr: VisitDatesType<EditListItem>[];
  setTravelScheduleArr: React.Dispatch<
    React.SetStateAction<VisitDatesType<EditListItem>[]>
  >;
  activeVisitDate: string;
  setActiveVisitDate: React.Dispatch<React.SetStateAction<string>>;
  showEditForm: boolean;
  setShowEditForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TravelScheduleContext =
  createContext<TravelScheduleContextType | null>(null);

export default function TravelScheduleContextProvider({ children }: Props) {
  const [travelScheduleArr, setTravelScheduleArr] = useState<
    VisitDatesType<EditListItem>[]
  >([]);
  const [activeVisitDate, setActiveVisitDate] = useState<string>('');

  const [showEditForm, setShowEditForm] = useState(false);
  const travelSchedule = useMemo(
    () => ({
      travelScheduleArr,
      setTravelScheduleArr,
      activeVisitDate,
      setActiveVisitDate,
      showEditForm,
      setShowEditForm,
    }),
    [travelScheduleArr, activeVisitDate, showEditForm],
  );
  return (
    <TravelScheduleContext.Provider value={travelSchedule}>
      {children}
    </TravelScheduleContext.Provider>
  );
}

export const useTravelScheduleContext = () => {
  const context = useContext(TravelScheduleContext);

  if (!context) {
    throw new Error('context is undefined');
  }

  return context;
};
