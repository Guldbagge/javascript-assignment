import React from 'react'
import ScrollToTop from '../components/Generics/ScrollToTop'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LetsConnectUs from '../components/componentsNews/LetsConnectUs'
import OurNewsArticles from '../components/componentsNews/OurNewsArticles'
import Newsletter from '../components/componentsNews/Newsletter'

const News = () => {
    return (
      <div className="wrapper-grid">
      <ScrollToTop/>
      <Header/>
        <LetsConnectUs/>
        <OurNewsArticles/>
        <Newsletter/>
      <Footer/>
    </div>
    )
  }

export default News