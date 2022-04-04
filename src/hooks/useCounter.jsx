import { useState, useCallback, useMemo } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const doubleCounter = useMemo(() => {
    return count * 2;
  }, [count]);

  const clickHandle = useCallback(
    (e) => {
      if (count < 9204) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);
  return { count, isShow, clickHandle, handleDisplay, doubleCounter };
};
