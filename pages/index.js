import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'
import { Main } from '../components/main'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="index"/>
      <Footer />
    </div>
  )
}
