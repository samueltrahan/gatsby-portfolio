import React from 'react'
import { Link } from 'gatsby'
import 

export default function index() {
  return (
    <header>
      <h1>Samuel Trahan</h1>
      <ul>
        <li>
            <Link to="/">Home</Link>
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
