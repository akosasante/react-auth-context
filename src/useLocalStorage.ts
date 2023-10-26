import { useEffect, useState } from 'react';

const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
  logMsg: (msg: string, ...rest: any[]) => void,
) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    try {
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (e) {
      logMsg(
        `Invalid JSON parsed for parsing value from localstorage, will return default value (${defaultValue}): `,
        e,
      );
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        key,
        value ? JSON.stringify(value) : JSON.stringify(defaultValue) || '{}',
      );
    } catch (e) {
      logMsg(
        `Failed to save ${value} or default (${defaultValue}) in local storage: `,
        e,
      );
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
