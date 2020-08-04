import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import '../../styles/reset.scss'

export default function index(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}
