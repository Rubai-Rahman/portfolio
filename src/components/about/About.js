import React from "react"
import me from "../../assets/me-about.jpg"
import { BsAward } from "react-icons/bs"
import { FiUser } from "react-icons/fi"
import "./About.css"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={me} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAward className="about_icons" />
              <h5>Experience</h5>
              <small>1+Years Working</small>
            </article>
            <article className="about_card">
              <FiUser className="about_icons" />
              <h5>Clients</h5>
              <small>50+</small>
            </article>
            <article className="about_card">
              <BsAward className="about_icons" />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            velit asperiores commodi animi cupiditate accusantium alias veniam,
            error enim pariatur.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
