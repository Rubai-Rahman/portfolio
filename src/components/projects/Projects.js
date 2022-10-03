import React from "react"
import "./Project.css"
import chrono from "../../assets/crono.jpeg"
import doctor from "../../assets/doctor.jpeg"
import mechanic from "../../assets/mechanic.jpeg"
import honda from "../../assets/honda.jpeg"

const projects = [
  {
    id: 1,
    name: "Chrono Click",
    img: chrono,
    github: "https://github.com/Rubai-Rahman/Chrono-Click",
    demo: "https://heartfelt-naiad-abcf09.netlify.app/",
  },
  {
    id: 2,
    name: "Doctor Portal",
    img: doctor,
    github: "https://github.com/Rubai-Rahman/Doctor-Portal",
    demo: "https://splendid-bombolone-a5dda5.netlify.app/",
  },
  {
    id: 3,
    name: "Car Service",
    img: mechanic,
    github: "https://github.com/Rubai-Rahman/Genius-Car-Service",
    demo: "https://genius-car-mechanics-fa699.firebaseapp.com/",
  },
  {
    id: 4,
    name: "Chrono Click",
    img: honda,
    github: "https://github.com/Rubai-Rahman/Chrono-Click",
    demo: "https://nostalgic-noyce-55996e.netlify.app/",
  },
]
const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        {projects.map(({ id, name, img, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={img} alt={name} />
              </div>
              <h3>{name}</h3>

              <div className="project_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Link
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
