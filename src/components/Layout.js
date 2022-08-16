import React from 'react'
import TopNav from './TopNav'
import * as styles from '../styles/home.module.sass'
import Nav from './Nav'

export default function Layout(props) {

  return (
    <div className={styles.layout}>
      <Nav />

      {props.children}
      {/* {props.children?.map((child)=><div>{child}</div>)} */}

      <footer>
        Copywright Vangaurd Creative 2022
      </footer>
    </div>
  )
}
