import { useEffect } from "react";

export const useBgBlueLight = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
