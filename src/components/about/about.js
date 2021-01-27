import React from "react"
import aboutStyles from "./about.module.css"

export default function About() {
  return (
    <div className={aboutStyles.about}>
      <div className={aboutStyles.about__left}>
        <h3 className="about__title">About Me</h3>
        <p className="about__details">My name is Andy and I'm awesome.</p>
      </div>
      <div className={aboutStyles.about__right}>
        <img
          src="https://via.placeholder.com/300"
          className="about__portrait"
        />
      </div>
    </div>
  )
}
