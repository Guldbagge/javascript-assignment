import React from 'react'
import backgroundLines from '../assets/image/background-lines.svg'
import imageManTablet from '../assets/image/image of a man width a tablet.svg'

const Showcase = () => {
  return (
    <section class="showcase">
    <img class="line" src={backgroundLines} alt=""/>
    <div class="container">
        <div class="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <a class="btn-yellow" title="Get Consulting" href="consulting.html">Get Consulting<i class="fa-solid fa-arrow-up-right"></i></a>
            <a class="btn-transparent" title="Learn More" href="services.html">Learn More<i class="fa-solid fa-arrow-up-right"></i></a>
        </div>
        <img src={imageManTablet} alt="image of a man width a tablet"/>
    </div>
</section>
  )
}

export default Showcase