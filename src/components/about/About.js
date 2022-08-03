import React from 'react'
import './About.css'
import resized from '../../assets/resized.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image"> 
                <img src={resized} alt="About Image" />
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about-icon"/>
              <h5>Experience</h5>
              <small>A few projects </small>
            </article>

            <article className="about__card">
              <FiUsers className="about-icon"/>
              <h5>Clients</h5>
              <small>None</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about-icon"/>
              <h5>Projects</h5>
              <small>Worked on a few projects</small>
            </article>
          </div>

          <p>
            Hey i'm Tolulope a Front-End Developer  as well as an Android Developer.
            I have serious passion for Andriod and UI,and creating intuitive, dynamic user experience.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
