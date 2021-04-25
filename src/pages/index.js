import React from "react"
import Navbar from "../components/navbar/navbar"
import Header from "../components/header/header"
import About from "../components/about/about"
import Projects from "../components/projects/projects"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import "../components/global/global.css"
import "fontsource-open-sans"

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}
