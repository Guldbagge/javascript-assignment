import React from 'react'
import logoBlack from '../assets/image/Logo-black.svg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
    <div className="container">
        
        {/* <button className="btn btn-group dropstart btn-menubars" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-bars-staggered"></i></button>
        <button/>
        <div className="dropdown-menu">
            <a className="dropdown-item" href="index.html">Home</a>
            <a className="dropdown-item" href="service.html">Services</a>
            <a className="dropdown-item" href="news.html">News</a>
            <a className="dropdown-item" href="contact.html">Contact</a>
        </div> */}
        
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
            <Link className="btn-yellow btn-login" title="login" href="login.html">Login <i className="fa-solid fa-arrow-up-right"></i></Link>
        </div>
    </div>
</header>
  )
}

export default Header