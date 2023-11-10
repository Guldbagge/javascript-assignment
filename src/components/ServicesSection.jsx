import React from 'react'
import ServiceBox from './parts/ServiceBox'
import Button from './parts/Button'
import backgroundLinesWhiteRight from '../assets/image/background-lines-white-right.svg'

const ServicesSection = () => {
    const services = [
        { title: "Business Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"sirvice/riskmanegment"},
        { title: "Startup Business", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"sirvice/riskmanegment"},
        { title: "Financial Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"sirvice/riskmanegment"},
        { title: "Risk Management", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"sirvice/riskmanegment"},
  
      ]

  return (
    <section className="services-section">
        <div className="section-title">
            <p>Our Services</p>
            <h2>We Provide The Best <br/> Service For Consulting</h2>
        </div>
        
        <div className='wrapper'>
            <div className="container">                   
                <img className= "lines-white-right" src={backgroundLinesWhiteRight} alt="" />

                <section className="services-sections">
                    {
                    services.map ((service, index) => (
                        <ServiceBox key={index} title={service.title} description={service.description} url={service.url}/>
                        
                    ))}
                </section>
            </div>
                <div className="center-content">
                    <Button type="btn-transparent" titel="Brows services" url="/service"/>
                </div>
        </div>
    </section>
  )
}

export default ServicesSection