import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(200);
  const clickHandle = (e) => {
    console.log(count);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
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
      <h1>{count}</h1>
      <button onClick={clickHandle}>ボタン</button>
      <Main page="index" />

      <Footer />
    </div>
  );
}
