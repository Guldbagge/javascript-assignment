import React from 'react'
import backgroundLines from '../assets/image/background-lines.svg'
import imageManTablet from '../assets/image/image of a man width a tablet.svg'

const Showcase = () => {
  return (
    <section className="showcase">
    <img className="line" src={backgroundLines} alt=""/>
    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <a className="btn-yellow" title="Get Consulting" href="consulting.html">Get Consulting<i className="fa-solid fa-arrow-up-right"></i></a>
            <a className="btn-transparent" title="Learn More" href="services.html">Learn More<i className="fa-solid fa-arrow-up-right"></i></a>
        </div>
        <img src={imageManTablet} alt="image of a man width a tablet"/>
    </div>
</section>
  )
}

export default Showcase