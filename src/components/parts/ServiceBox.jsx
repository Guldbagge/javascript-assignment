import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = ({title, description, url}) => {
    return (
      <div className ="service-box services">
        {/* <div className="services" to="#"> */}
          <span className='line'></span>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link className="btn-service" href="consulting.html"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
        {/* </div> */}
      </div>
    )
  }
  
  export default ServiceBox