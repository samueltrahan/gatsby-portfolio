import React from "react"
import Layout from "../components/Layouts"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import NameDisplay from "../components/NameDisplay/namedisplay"
import ProjectCard from "../components/ProjectCard/projectcard"

export default function Home() {
  return (
    <>
      <div className="portfolio">
        <Helmet>
          <title>Samuel Trahan</title>
        </Helmet>
        <Layout>
          <img src="https://i.imgur.com/LO312Wk.jpg" alt="samuel" />
          <NameDisplay />
          <br />
          <div className="about-me">
            <Link to="/about">Learn More About Me</Link>
          </div>
          <h2 className="my-projects">My Projects</h2>
          <ProjectCard />
        </Layout>
      </div>
    </>
  )
}
