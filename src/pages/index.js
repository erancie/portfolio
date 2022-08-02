import React from "react"
import TopNav from "../components/TopNav"
import Layout from "../components/Layout"
import Box from "../components/Box"
import '../styles/global.sass'
import * as styles from '../styles/home.module.sass'


export default function Home() {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
        <div className={styles.section}>
          <h1>Elliot Rancie</h1>
          <h1>Design | Develop</h1>
          <h1>Deploy</h1>
        </div>
        <div className={styles.section}>
          <h1>PAGE 2</h1>
        </div>
        <div className={styles.section}>
          <h1>PAGE 3</h1>
        </div>
        </div>

        <Box />

      </Layout>
    </div>
  )
}
