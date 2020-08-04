import React from "react"
import Layout from "../components/Layouts"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import NameDisplay from "../components/NameDisplay/namedisplay"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Samuel Trahan</title>
      </Helmet>
      <Layout>
        <NameDisplay />

      <br />
      <div className="about-me">
      <Link to='/about'>About Me</Link>
      </div>
      </Layout>
    </>
  )
}
