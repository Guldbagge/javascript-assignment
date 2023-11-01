import React from 'react'
import newspaper from '../assets/image/newspaper.png'
import glasses from '../assets/image/glasses.png'
import note from '../assets/image/note.png'
import computer from '../assets/image/computer.png'
import GlobalBox from '../components/Generics/GlobalBox'
import Button from './Generics/Button'

const ProjectAndCase = () => {
    const services = [
        { img: newspaper, title: "Business Advice", url: "business" },
        { img: glasses, title: "Startup Business", url: "startup" },
        { img: note, title: "Financial Advice", url: "financial" },
        { img: computer, title: "Risk Management", url: "riskmanagement" },
    ]
  return (
    <section className="project-and-case">
    <div className="container">
        <div className="section-title">
            <p>Project & Case Studies</p>
            <h2>Let's Looks Our Global Projects</h2>
        </div>

        <div className="project-and-cases">

        {   services.map ((service, index) => (
                <GlobalBox key={index} img={service.img} title={service.title} url={service.url}/>
          
            ))}

        </div>

        <div className="center-content">
            <Button type="dark" titel="All Recent Projects" url="/projects"/>
        </div>
    </div>
</section> 
  )
}

export default ProjectAndCase