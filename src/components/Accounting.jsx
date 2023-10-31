import React from 'react'
import Button from '../components/Generics/Button'
import BusinessBox from '../components/Generics/BusinessBox'

const Accounting = () => {
    const services = [
        { title: "Business Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"business"},
        { title: "Startup Business", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"startup"},
        { title: "Financial Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"financial"},
        { title: "Risk Management", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"riskmanegment"},
    ]

  return (
    <section className="accounting">
    <div className="container">
        <div className="section-title">
            <p>Features</p>
            <h2>Our Accounting is <br/> trusted by thousand <br/>of companies</h2>
            <Button type="yellow" titel="Brows services" url="/consulting"/>
        </div>

        <div class="business-box">

            {   services.map ((service, index) => (
                <BusinessBox key={index} title={service.title} description={service.description} url={service.url}/>
                        
            ))}

            {/* <div class="business-advice">
                <Link className="business-advices" to="#">
                    <i className="fa-light fa-handshake"></i>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </Link>
            </div>
            
            <div className="startup-business">
                <a className="startup-businesss" href="#">
                    <i className="fa-sharp fa-regular fa-lightbulb-exclamation-on"></i>
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div>
            
            <div className="financial-advice">
                <a className="financial-advices" href="#">
                    <i class="fa-regular fa-chart-mixed-up-circle-dollar"></i>
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div>

            <div className="risk-management">
                <a className="risk-managements" href="#">
                    <i className="fa-regular fa-box-circle-check"></i>
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div> */}
        </div>
    </div>
</section>
  )
}

export default Accounting