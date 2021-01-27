import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"

const ListLink = props => (
  <li className={headerStyles.header__link}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.header__content}>
        <Link to="/" className={headerStyles.header__wordmark}>
          <h3 className={headerStyles.header__name}>Andy McGuinness</h3>
        </Link>
        <span className={headerStyles.header__text}>
          Problem solver. Data analyst. Former barista.
        </span>
        <ul className={headerStyles.header__links}>
          <ListLink to="#about">About</ListLink>
          <li className={headerStyles.header__divider}>|</li>
          <ListLink to="#projects">Projects</ListLink>
          <li className={headerStyles.header__divider}>|</li>
          <ListLink to="#contact">Contact</ListLink>
        </ul>
      </div>
    </header>
  )
}
