import React from 'react'
import Header from '../components/Header.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase.jsx'
import Brand from '../components/Brand.jsx'
import Accounting from '../components/Accounting.jsx'
import AboutCompany from '../components/AboutCompany.jsx'

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
      <Footer/>
    </div>
    </>
  )
}

export default Home