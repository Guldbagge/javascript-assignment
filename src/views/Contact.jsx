import React from 'react'
import ScrollToTop from '../components/parts/ScrollToTop.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer'
import Contacts from '../components/componentsContact/Contacts.jsx'
import Map from '../components/componentsContact/Map.jsx'
import LeaveMessage from '../components/componentsContact/LeaveMessage.jsx'


const Contact = () => {
  return (
    <div className="wrapper-grid">
    <ScrollToTop/>
    <Header/>
    <Contacts/>
    <LeaveMessage/>
    <Map/>
    <Footer/>
  </div>
  )
}

export default Contact