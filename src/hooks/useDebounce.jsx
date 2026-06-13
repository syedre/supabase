import { useEffect, useState } from "react";

export function useDebounce(input, delay) {
  const [debounceValue, setDebounceValue] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(input);
    }, delay);
    return () => clearTimeout(timer);
  }, [input]);

  return debounceValue.toLowerCase();
}
