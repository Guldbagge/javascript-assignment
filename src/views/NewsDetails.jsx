import React from 'react'
import ScrollToTop from '../components/Generics/ScrollToTop'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LetsConnectUs from '../components/componentsNews/LetsConnectUs'
import Newsletter from '../components/componentsNews/Newsletter'
import NewsArticles from '../components/componentsNewsDetails/NewsArticles'
import { ArticlesProvider } from '../components/componentsNews/ArticlesContext';

const NewsDetails = () => {
    return (
      <ArticlesProvider>
      <div className="wrapper-grid">
        <ScrollToTop/>
        <Header/>
        <LetsConnectUs/>
        <NewsArticles/>
        <Newsletter/>
        <Footer/>
    </div>
    </ArticlesProvider>
    )
  }

export default NewsDetails