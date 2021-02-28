import React from "react"
import projectStyles from "./projects.module.css"

const ProjectBox = props => (
  <li className="project__box project-box">
    <span className="project-box__header">{props.header}</span>
    <span className="project-box__contents">{props.children}</span>
    <img src={props.img} className="project-box__image" />
  </li>
)

export default function Projects() {
  return (
    <div className={projectStyles.projects} id="projects">
      <h3 className="about__title">Projects</h3>
      <div className="projects__container">
        <ul className="projects__contents">
          <ProjectBox
            header="My Awesome Project"
            img="https://via.placeholder.com/300"
          >
            This project was a lot of fun!
          </ProjectBox>
        </ul>
      </div>
    </div>
  )
}
