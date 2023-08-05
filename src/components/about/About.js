import React from 'react';
import me from '../../assets/me-about.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img alt="Project pic" src={me} />
          </div>
        </div>

        <div className="about_content">
          <p>
            👋 Hello, I'm Rubai Rahman! I am a passionate and dedicated software
            engineer with educational background in Computer Science and
            Engineering, having successfully completed my B.Sc. degree from
            Daffodil International University. Currently, I am working as a
            junior software engineer at Bits Software Solutions, where I am
            actively involved in building innovative and user-friendly software
            solutions. My journey in the world of programming has allowed me
            proficient in creating dynamic and interactive web applications. I
            am continuously exploring the realms of web development. Apart from
            my professional pursuits, I find joy in watching anime during my
            leisure time, which allows me to unwind and spark my creativity. I
            am committed to lifelong learning and strive to stay up-to-date with
            the latest technologies and industry trends. My ultimate goal is to
            leverage my skills and knowledge to create impactful software
            solutions that solve real-world problems and improve people's lives.
            I am excited about collaborating with talented individuals and
            companies on exciting projects that challenge and inspire me. If
            you're looking for a dedicated and passionate software engineer to
            join your team or contribute to your project, I would be delighted
            to connect and explore potential opportunities together! Let's make
            the future of technology brighter, one line of code at a time. 🚀
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
