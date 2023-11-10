import React, { useState } from 'react'
import logoBlack from '../assets/image/Logo-black.svg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Menu from './parts/Menu'
import Button from './parts/Button'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
    <div className="container">
        
        {menuOpen ?(<Menu />) : (<></>)}
        <button onClick={() => setMenuOpen(!menuOpen)} className='btn-menubars'>
            {menuOpen ? (<i class="fa-solid fa-x"></i>) : <i className="fa-solid fa-bars-staggered"></i>}
        </button>
  
        <div className="logotype">
            <Link to="/home">
                <img src={logoBlack} alt="Logotyp picture"/>
                </Link>
        </div>
        <div className="contactinformation-bar">
            <Link to="#">
                <div className="content-box">
                    <i className="fa-light fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
            </Link >

            <Link to="#">
                <div className="content-box">
                    <i className="fa-light fa-envelope"></i>
                    info@crito.com
                </div>
            </Link >

            <Link to="#">
                <div className="content-box last">
                    <i className="fa-light fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </Link >
        </div>
        
        <div className="socialmedia-bar">
            <Link to="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></Link >
            <Link to="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link >
            <Link to="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link >
            <Link to="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link >
        </div>

        <div className="menu">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/contact">Contact</NavLink>

            </nav> 
            <Button type="yellow" titel="Login" url="/login"/>
        </div>
    </div>
</header>
  )
}

export default Header