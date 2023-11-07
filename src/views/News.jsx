import React from 'react';
import ScrollToTop from '../components/Generics/ScrollToTop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LetsConnectUs from '../components/componentsNews/LetsConnectUs';
import OurNewsArticles from '../components/componentsNews/OurNewsArticles';
import Newsletter from '../components/componentsNews/Newsletter';
import { ArticlesProvider } from '../components/componentsNews/ArticlesContext';

const News = () => {
  return (
    <ArticlesProvider> {/* Placera ArticlesProvider här för att omsluta komponenterna som behöver kontexten */}
      <div className="wrapper-grid">
        <ScrollToTop/>
        <Header/>
        <LetsConnectUs/>
        <OurNewsArticles/>
        <Newsletter/>
        <Footer/>
      </div>
    </ArticlesProvider>
  );
};

export default News;
