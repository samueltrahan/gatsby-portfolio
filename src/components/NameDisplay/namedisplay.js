import React from 'react'
import styles from './namedisplay.module.scss'

export default function namedisplay() {
  return (
    <h2 className={styles.namedisplay}>
      <span className={styles.text1}>Hello, my name is Samuel</span> <br/><br/>
      <span className={styles.text2}>I am a Software Engineer</span>
    </h2>
  )
}
