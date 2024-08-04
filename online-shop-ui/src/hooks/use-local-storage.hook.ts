import { useState } from "react";

export const useLocalStorage = <T>(
  keyName: string,
  defaultValue: T
): [T, (value: T) => void] => {
  
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value) as T;
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      console.error("Error reading from localStorage", err);
      return defaultValue;
    }
  });

  const setValue = (newValue: T): void => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.error("Error writing to localStorage", err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
