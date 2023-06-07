import React from 'react'
import './HeroimgStyles.css'
import Image from '../assets/Hero.jpeg'
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className='mask'>
        <img className='into-img' src={Image} alt='img' />
      </div>
      <div className='content'>
      <h1>ACE GYM</h1>
        <p style={{ color: 'white' , fontWeight: '900' }}>Kanpur</p>
        <div>
          <Link className='btn' to="/Contact">Contact</Link>
          <Link className='btn-light' to="/Register">Register</Link>

        </div>

      </div>
    </div>

  )
}

export default Heroimg