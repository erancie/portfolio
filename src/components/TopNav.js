import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/home.module.sass'
import Toggle from './Toggle'

export default function TopNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        ER
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <Toggle />
    </nav>
  )
}
