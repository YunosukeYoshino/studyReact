import { useState, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setIsArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  /*----------------------------------
  --------------handleAd--------------
  -----------------------------------*/
  const handleAd = useCallback(() => {
    setIsArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が存在します。");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);
  return { text, array, handleChange, handleAd };
};
