import React from "react"
import Header from "../components/header/header"
import About from "../components/about/about"
import Projects from "../components/projects/projects"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import "../components/global/global.css"

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}
