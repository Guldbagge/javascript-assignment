import React from 'react'
import { Link } from 'react-router-dom'
import newspaper from '../../assets/image/newspaper.png'

const GlobalBox = ({img, title, url}) => {
  return (
    <Link className="project" to={url}>
        <img src={img} alt="Image of newspaper a man reading"/>
        <h3>{title}</h3>
        <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right"></i></div> 
    </Link>
  )
}

export default GlobalBox