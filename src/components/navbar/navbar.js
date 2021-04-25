import React from "react"
import { motion } from "framer-motion"
import navbarStyles from "./navbar.module.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"

// Link Function
const ListLink = props => (
    <li className={navbarStyles.nav__link}>
      <AnchorLink to={"/" + props.to}>{props.children}</AnchorLink>
    </li>
  )
  
export default function Navbar() {
  // variants for the navbar anims
  const navVariants = {
    hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          ease: "easeIn",
          duration: 0.3,
        },
      },
    }
  const navHeaderVariants = {
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
        staggerChildren: 0.2,
        ease: "easeIn",
        duration: 0.3,
        delay: 0.2,
      },
    },
  }
  const navItemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  }

    //-- The Navbar
    return (
        <React.Fragment>
            {/* navbar */}
            <motion.div
            className={navbarStyles.nav}
            id="header-nav"
            initial="hidden"
            animate="visible"
            variants={navVariants}
            >
                <motion.div
                    className={navbarStyles.nav__left}
                    initial="hidden"
                    animate="visible"
                    variants={navHeaderVariants}
                >
                    <motion.div
                        className={navbarStyles.nav__wordmark}
                        variants={navItemVariants}
                    >
                        <AnchorLink to="/#header">Andy McGuinness</AnchorLink>
                    </motion.div>
                </motion.div>
                <motion.div
                    className={navbarStyles.nav__right}
                    initial="hidden"
                    animate="visible"
                    variants={navHeaderVariants}
                >
                    <motion.ul
                    className={navbarStyles.nav__links}
                    variants={navItemVariants}>
                        <ListLink to="#about">About</ListLink>
                        <li className={navbarStyles.nav__divider}>|</li>
                        <ListLink to="#projects">Projects</ListLink>
                        <li className={navbarStyles.nav__divider}>|</li>
                        <ListLink to="#contact">Contact</ListLink>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </React.Fragment>
    )
} 