import React from 'react'
import logo from '../assets/image/Logo.svg'
import backgroundLinesRight from '../assets/image/background-lines-right.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
            <img class= "background-lines-right" src={backgroundLinesRight} alt=""/>
            <div class="container">
                <div class="footer-links">
                    <div class="logo">
                        <img src={logo} alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div> 

                    <div class="footer-linkss">
                        <h3>Company</h3>
                        <div class="links">
                        <Link to="#">About</Link>
                        <Link to="#">Features</Link>
                        <Link to="#">Works</Link>
                        <Link to="#">Career</Link>
                        </div>
                    </div> 

                    <div class="footer-linkss">
                        <h3>Help</h3>
                        <div class="links">
                            <Link to="#">Customer Support</Link>
                            <Link to="#">Delivery Details</Link>
                            <Link to="#">Terms & Conditions</Link>
                            <Link to="#">Privacy Policy</Link>
                        </div>
                    </div> 

                    <div class="footer-linkss">
                        <h3>Resources</h3>
                        <div class="links">
                            <Link to="#">Free eBooks</Link>
                            <Link to="#">Development Tutorial</Link>
                            <Link to="#">How to - Blog</Link>
                            <Link to="#">Youtube Playlist</Link>
                        </div>
                    </div> 

                    <div class="footer-linkss">
                        <h3>Link</h3>
                        <div class="links">
                            <Link to="#">Free eBooks</Link>
                            <Link to="#">Development Tutorial</Link>
                            <Link to="#">How to - Blog</Link>
                            <Link to="#">Youtube Playlist</Link>

                        </div>
                    </div> 
                </div>
            </div>
            
            <div class="border-bottom"></div>

            <div class="container">
                <div class="footer-social-media">
                    <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved. </p>
                    <div class="socialmedia-bar">
                        <Link to="https://facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></Link>
                        <Link to="https://twitter.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></Link>
                        <Link to="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></Link>
                        <Link to="https://www.linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></Link>
                    </div>
                </div>
            </div>
        </footer> 
    
  )
}

export default Footer