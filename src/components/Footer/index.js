import React from 'react'
import styles from './footer.module.scss'

export default function index() {
  return (
    <footer className={styles.footer}>
      <p>Samuel Trahan - Copyright &copy; {new Date().getFullYear()} </p>
    </footer>
  )
}
