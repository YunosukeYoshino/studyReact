import { useState, useCallback } from "react";

export const useCounter = () => {
    const [count, setCount] = useState(200);
    const [isShow, setIsShow] = useState(true);
    const clickHandle = useCallback(
      (e) => {
        console.log(count);
        if (count < 204) {
          setCount((prevCount) => prevCount + 1);
        }
      },
      [count]
    );
    const handleDisplay = useCallback(() => {
      setIsShow((prevIsShow) => !prevIsShow);
    }, []);
    return { count, isShow, clickHandle, handleDisplay };
  };
