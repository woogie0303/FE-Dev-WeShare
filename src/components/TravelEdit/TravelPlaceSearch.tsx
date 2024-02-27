'use client';

import { useDebounceSearchQuery } from '@/hooks/useDebounceSearchQuery';
import React, { FocusEventHandler, useEffect, useState } from 'react';
import TravelPlaceAutoList from './TravelPlaceAutoList';

export default function TravelPlaceSearch() {
  const [autoCompleteLists, setAutoCompleteLists] = useState<SearchPlace[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>();
  const [showAutoCompleteList, setShowAutoCompleteList] = useState(false);
  const debounceQuery = useDebounceSearchQuery(searchQuery, 500);
  const handleSearchInputFocus: FocusEventHandler = (e) => {
    if (e.type === 'blur') {
      setShowAutoCompleteList(false);
    }
  };

  useEffect(() => {
    if (debounceQuery) {
      const ps = new window.kakao.maps.services.Places();
      const placeSearchDB = (data: SearchPlace[]) => {
        setAutoCompleteLists(data);
        setShowAutoCompleteList(true);
      };

      ps.keywordSearch(debounceQuery, placeSearchDB);
    }
  }, [debounceQuery]);

  return (
    <div className="relative pb-4">
      <label htmlFor="location" className="mb-2">
        장소
      </label>
      <input
        className="p-2 mt-2 font-normal rounded-lg w-full"
        id="location"
        autoComplete="off"
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setShowAutoCompleteList(false);
        }}
        onBlur={handleSearchInputFocus}
      />
      {showAutoCompleteList && (
        <TravelPlaceAutoList autoCompleteLists={autoCompleteLists} />
      )}
    </div>
  );
}
