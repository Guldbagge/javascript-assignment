import React from 'react'
import logoBlack from '../assets/image/Logo-black.svg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <div class="container">
        
        {/* <button class="btn btn-group dropstart btn-menubars" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-bars-staggered"></i></button>
        <button/>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="index.html">Home</a>
            <a class="dropdown-item" href="service.html">Services</a>
            <a class="dropdown-item" href="news.html">News</a>
            <a class="dropdown-item" href="contact.html">Contact</a>
        </div> */}
        
        <div class="logotype">
            <Link to="/home">
                <img src={logoBlack} alt="Logotyp picture"/>
                </Link>
        </div>
        <div class="contactinformation-bar">
            <Link to="#">
                <div class="content-box">
                    <i class="fa-light fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
            </Link >

            <Link to="#">
                <div class="content-box">
                    <i class="fa-light fa-envelope"></i>
                    info@crito.com
                </div>
            </Link >

            <Link to="#">
                <div class="content-box last">
                    <i class="fa-light fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </Link >
        </div>
        <div class="socialmedia-bar">
            <Link to="https://facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></Link >
                    <Link to="https://twitter.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></Link >
                    <Link to="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></Link >
                    <Link to="https://www.linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></Link >
        </div>
        <div class="menu">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/contact">Contact</NavLink>

            </nav> 
            <Link className="btn-yellow btn-login" title="login" href="login.html">Login <i class="fa-solid fa-arrow-up-right"></i></Link>
        </div>
    </div>
</header>
  )
}

export default Header