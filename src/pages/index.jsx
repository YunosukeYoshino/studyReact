import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from "react";

export default function Home() {
  const foo = 1;
  const clickHandle = useCallback((e) => {
    console.log(e.target);
    e.preventDefault();
    alert(foo);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <button onClick={clickHandle}>
        ボタン
      </button>
      <Main page="index" />

      <Footer />
    </div>
  );
}
