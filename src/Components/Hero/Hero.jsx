import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='hero-page'>
      <div className="hero-left">
        <h2>New Arrivals</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="hand" />
          </div>
          <p>Collection</p>
          <p>For everyone</p>
        </div>
        <div className="hero-latest-btn">
          <Link to='/shop'>
            <div>Latest Collection</div>
          </Link>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_img} alt="hero-img" />
      </div>
    </div>
  )
}

export default Hero