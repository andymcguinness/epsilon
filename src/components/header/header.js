import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import headerStyles from "./header.module.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Div100vh, use100vh } from 'react-div-100vh'

// Link Function
const ListLink = props => (
  <li className={headerStyles.header__link}>
    <AnchorLink to={"/" + props.to}>{props.children}</AnchorLink>
  </li>
)

export default function Header() {
  // Animation Properties
  // -- Initial Load Animations
  const headerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.6,
      },
    },
  }
  const listVariants = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        ease: "easeIn",
        duration: 0.6,
        delay: 0.3,
      },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  }

  // -- Scroll Animations
  const { scrollY } = useViewportScroll()
  // scrollY gives us the amount, in pixels, from the top we've scrolled

  // Pseudo-coding a bit
  // I want to take the scroll offset of Y,
  // and when the position of the header gets within 2 rem of the top value,
  // the header gets smaller. Let's start with that.
  const headerRef = React.useRef()
  const height = use100vh() // since I can't tell the y-offset of the element I need, just do some rough math
  const oneThirdHeight = height ? height / 3 : "33vh"
  const [isPastLimit, setIsPastLimit] = React.useState(false)
  const [position, setPosition] = React.useState("inherit")

  // The Header Itself
  return (
    <React.Fragment>
      <motion.header
        className={headerStyles.header-nav}
        id="header-nav"
        initial="hidden"
        animate="visible">
        <motion.div
          className={headerStyles.header-nav__left}
        >
          <h6>Andy McGuinness</h6>
        </motion.div>
        <motion.div
          className={headerStyles.header-nav__right}
        >
          <ul>
            <li>Hello</li>
            <li>Test 2</li>
            <li>Test 3</li>
          </ul>
        </motion.div>
      </motion.header>
      <motion.header
        className={headerStyles.header}
        id="header"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <motion.div
          className={headerStyles.header__content}
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          <motion.div variants={itemVariants}>
            <AnchorLink to="/#header" className={headerStyles.header__wordmark}>
              <motion.h3 className={headerStyles.header__name}>Andy McGuinness</motion.h3>
            </AnchorLink>
          </motion.div>
          <motion.span
            className={headerStyles.header__text}
            variants={itemVariants}
          >
            Problem solver. Data analyst. Former barista.
          </motion.span>
          <motion.ul
            className={headerStyles.header__links}
            variants={itemVariants}
          >
            <ListLink to="#about">About</ListLink>
            <li className={headerStyles.header__divider}>|</li>
            <ListLink to="#projects">Projects</ListLink>
            <li className={headerStyles.header__divider}>|</li>
            <ListLink to="#contact">Contact</ListLink>
          </motion.ul>
        </motion.div>
      </motion.header>
    </React.Fragment>
  )
}
