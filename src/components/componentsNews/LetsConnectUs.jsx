import React from 'react'
import BackgroundLines from '../../assets/image/background-lines.svg'
import { NavLink } from 'react-router-dom';

const LetsConnect = () => {
  return (
    <section className="lets-connect">
    <img className="line" src={BackgroundLines} alt=""/>
    <div className="container">
        <div className="content">
            <div className="links-connect">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/news">News</NavLink>
            </div>
            
            <div className="h2-links">
                <h2>News & Articles</h2>
            </div>
        </div>    
    </div>
</section>
  )
}

export default LetsConnect