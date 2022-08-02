import React from 'react'
import TopNav from './TopNav'
import * as styles from '../styles/home.module.sass'


export default function Layout(props) {
  console.log(props)
  return (
    <div className={styles.layout}>
      <TopNav />

      {props.children?.map((child)=><div>{child}</div>)}

      <footer>
        Copywright Vangaurd Creative 2022
      </footer>
    </div>
  )
}
