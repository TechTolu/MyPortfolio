import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Implementing design on mobile websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Optimizing the user experience.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Fixing bugs and testing for usability.</p>
          </li>
          </ul>
        </article>
        {/* End Of Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Android Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>enhancement of mobile software that runs on all supported Android OS versions. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>UI/UX design services.</p>
            </li>
          </ul>
        </article> 
      </div>
    </section>
  )
}

export default Services
