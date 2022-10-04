import React from "react"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"

const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/rubai-rahman-116707216/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://twitter.com/RahmanRubai"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <AiFillTwitterCircle />
      </a>
    </div>
  )
}

export default HeaderSocial
