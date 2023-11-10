import React from 'react'

const TestimonialBox = ({icon, description, img, title, descriptionRed}) => {
  return (
    <div className="testimonial-information">
        <i className={icon}></i> <i className={icon}></i> <i className={icon}></i> <i className={icon}></i> <i className={icon}></i>
        <p className="text">{description}</p>
        <div className="testimonial-box">
            <div>
            <img src={img} alt={`Image of ${title}`} />
            </div>
            
            <div className="text-p-h3">  
                <h3>{title}</h3>
                <p className="testimonial-red-text">{descriptionRed}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialBox