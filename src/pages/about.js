import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layouts'

export default function about() {
  return (
    <div className="portfolio">
    <Layout>
      <h1>About Me</h1>
      <p>I was born in 1991, in Southern Louisiana.  I grew up playing all kind of sports, and through my time of playing sports I've learned to work well in a team and how to put in the work for something greater down the road. <br /> 
       My software journey began over a year ago, and I have come a long way over that year.  Pushing my limits everyday to learn languages that I thought I would never be able to learn.  My projects are a true testament to the hard work 
      and determination that I have put into programming and learning in general.  I plan to keep furthering my knowledge every day, learning new technologies and refining my skills that I've already learned.  
       </p>
       <ul>
         <h2>Strong Skills</h2>
         <li>React</li>
         <li>JavaScript</li>
         <li>HTML</li>
         <li>CSS</li>
         <li>Node</li>
         <li>GIT</li>
         <li>MongoDB</li>
         <li>NPM</li>
         <li>Express</li>
       </ul>
       <ul>
         <h2>Experienced Skills</h2>
         <li>Python</li>
         <li>Django</li>
         <li>Bootstrap</li>
         <li>Gatsby</li>
         <li>Netlify</li>
         <li>Materialize</li>
         <li>Babel</li>
       </ul>
    </Layout>
    </div>
  )
}
