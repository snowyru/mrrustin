import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LabGif from '../public/Lab.gif'

export default function Home() {
  return (
    <div style={{backgroundColor:"rgb(37, 150, 190)", width:"100%", height:"100vh", padding:"5px"}} className={styles.container}>
      <Head>
        <title>Mr Rustin | Home</title>
        <meta name="description" content="Make it awesome!" />
        <meta name="keywords" content="portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 style={{textAlign:"center"}} >Welcom to Mr Rustin.com</h1>
      <h2 style={{textAlign:"center"}} >Something awesome is brewing in the labs right now 🧪🔬😎 </h2>
      <div style={{textAlign:"center"}} ><Image src={LabGif} width={400} height={400}/></div>

    </div>
  )
}
