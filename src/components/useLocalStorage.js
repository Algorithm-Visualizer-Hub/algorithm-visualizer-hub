import { useState } from "react";

/**
 * Hook for localStorage usage.
 * @returns 
 */
export default function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(JSON.parse(localStorage.getItem(key)));

  const saveStoredValue = val => {
    localStorage.setItem(key, JSON.stringify(val));
    setStoredValue(val);
  };

  return [storedValue, saveStoredValue];
};