import React from 'react'
import BackgroundLines from '../../assets/image/background-lines.svg'

const LetsConnect = () => {
  return (
    <section className="lets-connect">
    <img className="line" src={BackgroundLines} alt=""/>
    <div className="container">
        <div className="content">
            <div className="links-connect">
                <a href="index.html">Home</a>
                <a href="news.html">News</a>
            </div>
            
            <div className="h2-links">
                <h2>News & Articles</h2>
            </div>
        </div>    
    </div>
</section>
  )
}

export default LetsConnect