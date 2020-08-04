import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default function index() {
  return (
    <header className={styles.header}>
      <h1>Samuel Trahan</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </header>
  )
}
