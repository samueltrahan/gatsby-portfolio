import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layouts'

export default function about() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>My name is Samuel Trahan and I am a Software Engineer from Louisiana.</p>
      <Link to='/contact'>Contact Me</Link>
    </Layout>
  )
}
