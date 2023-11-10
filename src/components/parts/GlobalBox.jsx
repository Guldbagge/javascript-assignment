import React from 'react'
import { Link } from 'react-router-dom'

const GlobalBox = ({img, title, url}) => {
  return (
    <Link className="project" to={url}>
        <img src={img} alt={`Image of ${title}`} />
        <h3>{title}</h3>
        <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right"></i></div> 
    </Link>
  )
}

export default GlobalBox