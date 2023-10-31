import React from 'react'
import Button from '../components/Generics/Button'
import BusinessBox from '../components/Generics/BusinessBox'

const Accounting = () => {
    const services = [
        { icon:"fa-light fa-handshake", title: "Business Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"business"},
        { icon:"fa-sharp fa-regular fa-lightbulb-exclamation-on", title: "Startup Business", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"startup"},
        { icon:"fa-regular fa-chart-mixed-up-circle-dollar", title: "Financial Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"financial"},
        { icon:"fa-regular fa-box-circle-check", title: "Risk Management", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"riskmanegment"},
    ]

  return (
    <section className="accounting">
    <div className="container">
        <div className="section-title">
            <p>Features</p>
            <h2>Our Accounting is <br/> trusted by thousand <br/>of companies</h2>
            <Button type="yellow" titel="Brows services" url="/consulting"/>
        </div>

        <div className="business-box">

            {   services.map ((service, index) => (
                <BusinessBox key={index} icon={service.icon} title={service.title} description={service.description} url={service.url}/>
                        
            ))}
        </div>
    </div>
</section>
  )
}

export default Accounting