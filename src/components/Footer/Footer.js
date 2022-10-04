import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaTwitter } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        {" "}
        Rubai Rahman
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://github.com/Rubai-Rahman"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="footer_socials-icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/rubai-rahman-116707216/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="footer_socials-icons" />
        </a>
        <a
          href="https://twitter.com/RahmanRubai"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="footer_socials-icons" />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; All Right Reserved </small>
      </div>
    </footer>
  )
}

export default Footer
