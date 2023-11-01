import React from 'react'
import Header from '../components/Header.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase.jsx'
import Brand from '../components/Brand.jsx'
import Accounting from '../components/Accounting.jsx'
import AboutCompany from '../components/AboutCompany.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import ProjectAndCase from '../components/ProjectAndCase.jsx'
import MeetOurTeam from '../components/MeetOurTeam.jsx'
import Newsletter from '../components/Newsletter.jsx'

const Home = () => {
  return (
    <>
     <div className="wrapper-grid">
      <Header/>
      <Showcase/>
      <Brand/>
      <Accounting/>
      <AboutCompany/>
      <ServicesSection/>
      <WhyChooseUs/>
      <ProjectAndCase/>
      <MeetOurTeam/>
      <Newsletter/>
      <Footer/>
    </div>
    </>
  )
}

export default Home