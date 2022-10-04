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
            Hello I am Rubai Rahman. I have completed B.sc in Computer Science and Engineering from Daffodil International University .
            I am  Seeking an
            entry -level web developer position where I can apply my
            attention to detail and knowledge. I learned about web development.
            I want to pursue my carrier as a mernstack web developer. To gain
            confidence and fame using my potential in this position, and express
            my innovative creative skills for self and company growth. I’m a
            hardworking and quick learner. I believe hard work is the only way
            to success. Love to learn new technology and try to improve myself.
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
