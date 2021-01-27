import React from "react"
import footerStyles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <h3 className={footerStyles.footer__header}>That's all, folks</h3>
      <div className="footer__find-me">
        <span className="footer__find-me-header">Find me:</span>
        <ul className="footer__social-list">
          <li className="footer__instagram">Instagram</li>
          <li className="footer__linkedin">LinkedIn</li>
          <li className="footer__twitter">Twitter</li>
        </ul>
      </div>
      <div className="footer__legal">
        Site copyright Andy McGuinness, 2021. Header photo by{" "}
        <a
          className="footer__legal-link"
          href="https://unsplash.com/@cgower?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >
          Christopher Gower
        </a>{" "}
        on Unsplash.
      </div>
    </footer>
  )
}
