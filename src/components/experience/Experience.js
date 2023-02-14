import React from "react"
import { HiCheckCircle } from "react-icons/hi"
import "./Experience.css"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>.{" "}
      <div className="container experience_container">
        <div className="experience_frontEnd">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {" "}
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {" "}
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {" "}
                <h4>REACT</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {" "}
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {" "}
                <h4>TAILWIND</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                <h4>MATERIAL UI</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/*=====================BackEnd DevelopeMend===============*/}

        <div className="experience_backEnd">
          <h3>BackEnd Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {" "}
                <h4>EXPRESS JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                <h4>MONGODB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                <h4>Hasura</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
