import React from 'react'
import Header from '../components/Header.jsx'

const PageNotFound = () => {
  return (
    <>
    <Header/>
    <div className="wrapper-loader">
      <span className="loader"><i className="fa-sharp fa-regular fa-triangle-person-digging"></i></span>
        <div className="under-construction">
            <h3>Page is under construction</h3>
        </div>
    </div>
    </>
  )
}

export default PageNotFound