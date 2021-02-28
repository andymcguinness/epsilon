import React from "react"
import aboutStyles from "./about.module.css"
import andyPic from "./andy_pic.jpeg"
import typography from "./../global/typography.module.css"

export default function About() {
  return (
    <div className={aboutStyles.about} id="about">
      <h3 className={typography.section__title}>About</h3>
      <div className={aboutStyles.about__left}>
        <p className={aboutStyles.about__details}>
          Hi! My name is Andy, and I'm a data analyst/software support engineer
          by trade.
        </p>
        <p className={aboutStyles.about__details}>
          I have a variety of hobbies, including reading, lifting weights,
          playing World of Warcraft, writing, and leatherworking.
        </p>
        <p className={aboutStyles.about__details}>
          As both a former barista and a former web developer, coffee and code
          are two things I'm deeply passionate about.
        </p>
        <p className={aboutStyles.about__details}>
          I'm currently learning data science to further my skillset and
          abilities, and I'm absolutely loving it!
        </p>
        <p className={aboutStyles.about__details}>
          Thanks for stopping by, and I hope you have a great rest of your day!
        </p>
      </div>
      <div className={aboutStyles.about__right}>
        <img
          src={andyPic}
          className={aboutStyles.about__portrait}
          alt="An image of Andy smiling."
        />
      </div>
    </div>
  )
}
