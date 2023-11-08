import React from 'react'
import Header from '../components/Header.jsx'

const PageNotFound = () => {
  return (
    <>
    <Header/>
    <div class="wrapper-loader">
      <span class="loader"><i class="fa-sharp fa-regular fa-triangle-person-digging"></i></span>
        <div class="under-construction">
            <h3>Page is under construction</h3>
        </div>
    </div>
    </>
  )
}

export default PageNotFound