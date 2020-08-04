import React from "react"
import { Helmet } from "react-helmet"

import styles from "./projectcard.module.scss"

export default () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
        ></script>
      </Helmet>
      <div className={styles.cardcontainer}>
        <main className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src="https://i.imgur.com/nvJ4sJB.png"
              alt="Simon"
            />
          </div>
          <article className="card-content">
            <span className="card-title activator">
              <a href="https://samueltrahan.github.io/SImon/"></a>Simon
            </span>
            <p>
              Simon game made using{" "}
              <h6 className="strong">Vanilla JavaScript, HTML, & CSS</h6>
            </p>
            <br />
            <p>
              To view my GitHub for the project <br />{" "}
              <a href="https://github.com/samueltrahan/SImon">Click Here</a>
            </p>
            <p>
              To view the deployed applicaton <br />{" "}
              <a href="https://samueltrahan.github.io/SImon/">Click Here</a>
            </p>
          </article>
        </main>
        <main className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src="https://i.imgur.com/tXmW5wq.png"
              alt="Caddie"
            />
          </div>
          <article className="card-content">
            <span className="card-title activator"></span>
            <p>
              Caddie is an app that allows you to easily search and favorite
              golf courses. Adding the courses to your course list allows you to
              keep track of golf courses you've played or would like to play one
              day. Check out the details of the each course on your course list
              to see tee times on their website.
            </p>
            <p>
              This application was made using{" "}
              <h6 className="strong">Express, Node, EJS, and CSS</h6>
            </p>
            <br />
            <p>
              To view my GitHub for the project <br />{" "}
              <a href="https://github.com/samueltrahan/Caddie.">Click Here</a>
            </p>
            <p>
              To view the deployed applicaton <br />{" "}
              <a href="https://caddie-golf.herokuapp.com/">Click Here</a>
            </p>
          </article>
        </main>
        <main className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src="https://i.imgur.com/WETr3F4.png"
              alt="Assemblr"
            />
          </div>
          <article className="card-content">
            <span className="card-title activator"></span>
            <p>
              Assemblr is an application connecting General Assembly students
              from different programs to each other. Making collaboration and
              help only a post away.
            </p>
            <p>
              This application was made{" "}
              <strong className="strong">Python and Django</strong>
            </p>
            <p>
              To view my GitHub for the project
              <br />{" "}
              <a href="https://github.com/ChrisChroma/Assemblr.">Click Here</a>
            </p>
            <p>
              To view the deployed applicaton <br />{" "}
              <a href="https://asmblr.herokuapp.com/">Click Here</a>
            </p>
          </article>
        </main>
        <main className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src="https://i.imgur.com/6cmfMWZ.png"
              alt="HEART"
            />
          </div>
          <article className="card-content">
            <span className="card-title activator"></span>
            <p>
              Heart is a health and lifestyle application used to keep track of
              workouts and things that you may need to get done. With a added
              recipe feature to help users look up healthy meals.
            </p>
            <p>
              This application is a{" "}
              <h6 className="strong">MERN stack application</h6>.
            </p>
            <p>
              To view my GitHub for the project <br />{" "}
              <a href="https://github.com/samueltrahan/HEART">Click Here</a>
            </p>
            <p>
              To view the deployed applicaton <br />{" "}
              <a href="https://createheart.herokuapp.com/">Click Here</a>
            </p>
          </article>
        </main>
      </div>
    </>
  )
}
