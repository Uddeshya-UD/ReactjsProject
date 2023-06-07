import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './NavbarStyles.css'
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);


  return (
    <div className='header'>
      {/* <h1>ACE GYM</h1> */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Bmr">Bmr</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleclick}>
        {

          click ? (<FaTimes size={20} style={{ color: "white" }} />) : (<FaBars size={20} style={{ color: "white" }} />)

        }
      </div>
    </div>
  )
}

export default Navbar