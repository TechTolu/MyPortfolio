import React from 'react'
import './Header.css'
import CTA from './CTA'
import toluTrans from '../../assets/toluTrans.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Tolulope Ogunnusi</h1>
          <h5 className="text-light">Frontend And Andriod Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
              <img src={toluTrans} alt="tolu"/>
          </div>

          <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
