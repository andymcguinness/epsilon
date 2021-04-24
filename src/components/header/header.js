import React from "react"
import { useRef, useLayoutEffect, useState } from "react"
import { motion, useViewportScroll, useTransform, useAnimation, useSpring, easeIn } from "framer-motion"
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

  // -- Scroll Animations for header
  const { scrollY } = useViewportScroll()
  // scrollY gives us the amount, in pixels, from the top we've scrolled

  const height = use100vh() // since I can't tell the y-offset of the element I need, just do some rough math
  const oneThirdHeight = height ? height / 3 : "33vh"
  const twoThirdHeight = height ? (height / 3) * 2 : "66vh"

  const [opacityValue, setOpacityValue] = useState(0);

  const controls = useAnimation()

  const ref = useRef(0)

  const opacity = useTransform(scrollY, [0, oneThirdHeight, oneThirdHeight + 10], [0, 0, 1], easeIn)

  opacity.onChange(() => {
    setOpacityValue(opacity.current)
  })

  const navVariants = {
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
        //ease: "easeIn",
        duration: 0.1,
        delay: 0,
      },
    },
  }
  const navLeftVariants = {
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
        delay: 0,
      },
    },
  }
  const navHeaderVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }
  const navListVariants = {
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
        duration: 0.3,
        delay: 0,
      },
    },
  }
  const navItemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }

  // The Header Itself
  return (
    <React.Fragment>
      <motion.div
        className={headerStyles.header__nav}
        id="header-nav"
        style={{opacity}}
        initial={false}
        animate={opacityValue ? "visible" : "hidden"}
        variants={navVariants}
        controls={controls}
        >
        <motion.div
          className={headerStyles.header__nav_left}
          initial={false}
          variants={navLeftVariants}
        >
          <motion.h6
            className={headerStyles.header__nav_wordmark}
            variants={navHeaderVariants}
            animate={opacityValue ? "visible" : "hidden"}
          >Andy McGuinness</motion.h6>
        </motion.div>
        <motion.div
          className={headerStyles.header__nav_right}
          initial={false}
          variants={navListVariants}
        >
          <motion.ul
            variants={navItemVariants}>
            <li>Hello</li>
            <li>Test 2</li>
            <li>Test 3</li>
          </motion.ul>
        </motion.div>
      </motion.div>
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
              <motion.h3 ref={ref} className={headerStyles.header__name}>Andy McGuinness</motion.h3>
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
