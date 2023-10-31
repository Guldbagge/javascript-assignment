import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = ({title, description, url}) => {
    return (
      <div className ="service-box">
        <Link className="services" to="#">
          <i className="fa-regular fa-horizontal-rule"></i><i className="fa-regular fa-horizontal-rule"></i>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link className="btn-service" href={url}><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>  
        </Link>
      </div>
    )
  }
  
  export default ServiceBox