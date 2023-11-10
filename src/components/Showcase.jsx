import React from 'react'
import backgroundLines from '../assets/image/background-lines.svg'
import imageManTablet from '../assets/image/image of a man width a tablet.svg'
import Button from './parts/Button'

const Showcase = () => {
  return (
    <section className="showcase">
    <img className="line" src={backgroundLines} alt=""/>
    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <Button type="yellow" titel="Get Consulting" url="/consulting"/>
            <Button type="transparent" titel="Learn More" url="/consulting"/>
        </div>
        <img src={imageManTablet} alt="image of a man width a tablet"/>
    </div>
</section>
  )
}

export default Showcase