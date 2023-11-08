import React from 'react'
import ScrollToTop from '../components/Generics/ScrollToTop.jsx'
import Header from '../components/Header.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import Showcase from '../components/Showcase.jsx'
import Brand from '../components/Brand.jsx'
import Accounting from '../components/Accounting.jsx'
import AboutCompany from '../components/AboutCompany.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import ProjectAndCase from '../components/ProjectAndCase.jsx'
import MeetOurTeam from '../components/MeetOurTeam.jsx'
import NewsArticles from '../components/componentsNewsDetails/NewsArticles.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer'
import { ArticlesProvider } from '../components/componentsNews/ArticlesContext';

const Home = () => {
  return (
    <>
    <ArticlesProvider>
      <div className="wrapper-grid">
        <ScrollToTop/>
        <Header/>
        <Showcase/>
        <Brand/>
        <Accounting/>
        <AboutCompany/>
        <ServicesSection/>
        <WhyChooseUs/>
        <ProjectAndCase/>
        <MeetOurTeam/>
        <NewsArticles/>
        <Newsletter/>
        <Footer/>
      </div>
    </ArticlesProvider>
    </>
  )
}

export default Home