import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>.{' '}
      <div className="container experience_container">
        <div className="experience_frontEnd">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
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
                {' '}
                <h4>REACT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {' '}
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {' '}
                <h4>TAILWIND</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                <h4>Next Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {' '}
                <h4>TANSTACK QUERY TABLE</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {' '}
                <h4>ZUSTAND</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {' '}
                <h4>REDUX</h4>
                <small className="text-light">Begineer</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {' '}
                <h4>REDUX TOOLKIT</h4>
                <small className="text-light">Begineer</small>
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
                {' '}
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
                <h4>MONGOOSE</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                <h4>HASURA</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                <h4>ORACLE SQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
          <h3>Others Technology</h3>
          <div className="experience_content">
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {' '}
                <h4>PRISMA</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {' '}
                <h4>DOCKER</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {' '}
                <h4>PLAYWIRGHT</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <HiCheckCircle className="experience_details-icon" />
              <div>
                {' '}
                <h4>DATADOG</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
