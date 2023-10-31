import React from 'react'
import Header from '../components/Header.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase.jsx'
import Brand from '../components/Brand.jsx'

const Home = () => {
  return (
    <>
     <div class="wrapper-grid">
      <Header/>
      <Showcase/>
      <Brand/>
      <ServicesSection/>
      <Footer/>
    </div>
    </>
  )
}

export default Home