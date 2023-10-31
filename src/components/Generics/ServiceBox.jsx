import React from 'react'

// {} för att skicka in ett värde

const ServiceBox = ({title, description, url}) => {
    return (
      <div className ="service-box">
        <a className="services" href="#">
          <i className="fa-regular fa-horizontal-rule"></i><i className="fa-regular fa-horizontal-rule"></i>
          <h3>{title}</h3>
          <p>{description}</p>
          <a className="btn-service" href={url}><i className="fa-sharp fa-regular fa-arrow-right"></i></a>  
        </a>
      </div>
    )
  }
  
  export default ServiceBox