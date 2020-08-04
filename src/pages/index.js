import React from "react"

import { Link } from 'gatsby'
import Layout from '../components/Layouts'

export default function Home() {
  return (
  <Layout>
    <h2>Hi there!</h2>
    <p>I'm Samuel, a Austin-based software engineer</p>
    <Link to="/contact">Contact Me</Link><br/>
    <Link to='/about'>About Me</Link>
  </Layout>
  )
}
