import React, { useState } from 'react'
import * as styles from '../styles/toggle.module.sass'

export default function Toggle() {

  let [isLightMode, setIsLightMode]= useState(true)  

  const handleClick = (e) => {
    setIsLightMode((prev)=>!prev)
  }
  return (
    <div 
      onClick={handleClick}
      className={styles.container}
    >
      <div className={styles.btn +` ${isLightMode?'':styles.dark}`}></div>
    </div>
  )
}
