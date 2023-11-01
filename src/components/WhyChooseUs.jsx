import React from 'react';
import ConsultingAgency from '../assets/image/Consulting Agency.png'
import  ConsultingBox from './Generics/ConsultingBox'

const WhyChooseUs = () => {
    const services = [
        { icon:"far fa-thumbs-up", title: "Process Excellence", description:"Lorem, ipsum dolor sit amet consectetur."},
        { icon:"fas fa-star", title: "Strategic Planning", description:"Lorem, ipsum dolor sit amet consectetur."},
        { icon:"far fa-pen-nib fa-rotate-180", title: "Experience Design", description:"Lorem, ipsum dolor sit amet consectetur."},
        { icon:"far fa-head-side-gear", title: "Artificial Intelligence", description:"Lorem, ipsum dolor sit amet consectetur."},
    ]
  
    return (
    <section className="why-choose-us">
      <div className="container">
        <div className="best-business">
          <p className="why-choose-us-heading">Why Choose Us</p>
          <h2>
            Why We Are The <br />Best Business <br /> Consulting Agency
          </h2>

          {   services.map ((service, index) => (
                <ConsultingBox key={index} icon={service.icon} title={service.title} description={service.description}/>
                        
            ))}
            
        </div>

        <div className="best-business-image">
          <div className="box">
            <div className="best-image">
              <img src={ConsultingAgency} alt="Two women discussing" />
            </div>
          </div>
        </div>
        <div className="best-business-square"></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
