import React from "react"
import { motion } from "framer-motion"
import headerStyles from "./header.module.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"

// Link Function
const ListLink = props => (
  <li className={headerStyles.header__link}>
    <AnchorLink to={"/" + props.to}>{props.children}</AnchorLink>
  </li>
)

export default function Header() {
  // Animation Properties
  // -- Initial Load Animations for hero
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



  //-- The Header Itself
  return (
    <React.Fragment>
      {/* hero */}
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
              <motion.h3 className={headerStyles.header__name}>Hi! I'm Andy.</motion.h3>
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
