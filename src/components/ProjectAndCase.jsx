import React from 'react'
import newspaper from '../assets/image/newspaper.png'
import glasses from '../assets/image/glasses.png'
import note from '../assets/image/note.png'
import computer from '../assets/image/computer.png'
import { Link } from 'react-router-dom'
import GlobalBox from '../components/Generics/GlobalBox'

const ProjectAndCase = () => {
    const services = [
        {img: "newspaper", title: "Business Advice", url:"business"},
        {title: "Startup Business", url:"startup"},
        {title: "Financial Advice", url:"financial"},
        {title: "Risk Management", url:"riskmanegment"},
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


            {/* <a className="project" href="#">
                <img src={newspaper} alt="Image of newspaper a man reading"/>
                <h3>Grow your business</h3>
                <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right"></i></div> 
            </a>

            <a className="project" href="#">
                <img src={glasses} alt="Image of a pare glasses"/>
                <h3>Why your client needs a responsive website</h3>
                <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right"></i></div> 
            </a>

            <a className="project" href="#">
                <img src={note} alt="Image of notes"/>
                <h3>Educate your employees to get better results</h3>
                <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right"></i></div> 
            </a>

            <a className="project" href="#">
                <img src={computer}alt="Image of a computer"/>
                <h3>Business Insights is a important piece of your business    </h3>
                <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right"></i></div> 
            </a> */}
        </div>

        <div className="center-content">
            <a className="btn-black" href="projects.html">All Recent Projects<i className="fa-solid fa-arrow-up-right"></i></a>
        </div>
    </div>
</section> 
  )
}

export default ProjectAndCase