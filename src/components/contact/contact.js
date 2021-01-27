import React from "react"
import contactStyles from "./contact.module.css"

export default function Contact() {
  return (
    <div className={contactStyles.contact}>
      <h3 className="contact__header">Reach out!</h3>
      <div className="contact__form">
        <input type="text" className="contact__input"></input>
      </div>
    </div>
  )
}
