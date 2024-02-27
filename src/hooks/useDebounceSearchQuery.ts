import { useEffect, useState } from 'react';

export const useDebounceSearchQuery = (
  query: string | undefined,
  delay: number,
) => {
  const [debounceQuery, setDebounceQuery] = useState<string>();

  useEffect(() => {
    if (query) {
      const timer = setTimeout(() => {
        setDebounceQuery(query);
      }, delay);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [query, delay]);

  return debounceQuery;
};
