import React from 'react'
import woman from '../assets/image/woman.png'
import EWlement from '../assets/image/EWlement.svg'
import { Link } from 'react-router-dom'
import Button from './parts/Button'

const AboutCompany = () => {
  return (
        <section className="about-company">
            <div className="container">
                <div className="container-about-company">
                    <div className="woman">
                        <img src={woman} alt="woman walking"/>
                        
                        <div className="box">
                            <div className="name-founder">
                                <h3 className="name">Samantha Brown, </h3> 
                                <h3 className="founder">Founder</h3>
                            </div>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                        </div>

                        <div className="line">
                            <img src={EWlement} alt=""/>
                        </div>
                    </div>

                    <div className="about-companys">
                        <p className="company-heding">About Company</p>
                        <h2>We Are Business <br/>Consulting & Credit <br/>Repair Experts</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                        <Button type="dark" titel="Learn More" url="/learnmore" />
                        <button className="btn-round"><i className="fa-sharp fa-solid fa-play fa-xs"></i></button>
                        <Link to="#">Intro Video</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCompany