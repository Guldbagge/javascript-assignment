import React from 'react'
import { Link } from 'react-router-dom'

const BusinessBox = ({title, description, url}) => {
  return (
    <div className="business-advice">
        <Link className="business-advices" to={url}>
            <i className="fa-light fa-handshake"></i>
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    </div>
  )
}

export default BusinessBox