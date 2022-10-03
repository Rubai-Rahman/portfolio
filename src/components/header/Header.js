import React from "react"
import "./Header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocial from "./HeaderSocial"
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Rubai Rahman</h1>
        <h5 className="text-light">MERN_STACK DEVELOPER</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
