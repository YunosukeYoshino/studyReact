import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const [count, setCount] = useState(200);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setIsArray] = useState([]);

  const clickHandle = useCallback(
    (e) => {
      console.log(count);
      if (count < 204) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
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

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={clickHandle}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />

      <Footer />
    </div>
  );
}
