import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"

const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a href="" target="_blank">
        <AiFillGithub />
      </a>
      <a href="" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="" target="_blank"> <AiFillTwitterCircle/></a>
    </div>
  )
};

export default HeaderSocial;