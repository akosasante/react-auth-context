import { useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    try {
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (e) {
      console.error('Invalid JSON:', e);
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, value ? JSON.stringify(value) : '{}');
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
