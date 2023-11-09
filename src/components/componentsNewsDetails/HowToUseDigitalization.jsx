import React from 'react'
import newsWoman from '../../assets/image/news-woman.png'
import { Link } from 'react-router-dom'

const HowToUseDigitalization = () => {
  return (
    
    // <!-- how-to-use-digitalization section -->
    <main className="news-digitalization">
    <div className="wrapper-digitalization"> 
        <div className="container digitalization-container">   
            <section>
                <h2>How To Use Digitalization <br/>
                    In The classroom
                </h2>

                <div className="h4-digitalization">
                    <h4>Mar 25, 2023</h4>
                    <div className="dot"></div>
                    <h4>Business</h4>
                    <div className="dot"></div>
                    <h4>Kimberly Hansen</h4>
                </div>

                <img src={newsWoman} alt="woman smile and sitting on a chair"/>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. <br/>

                    Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br/>

                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. <br/>

                    Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                    Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                </p>
                
                <div className="p">
                    <div className="quotation"><i className="fa-sharp fa-solid fa-quote-right fa-flip-horizontal"></i></div>
                    <p className="bigger">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                    </p>
                </div>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                </p> 

                <div className="button-digitalization">
                    <span><button className="btn-gray Digitalization">Digitalization</button></span>
                    <span><button className="btn-gray School">School</button></span>
                    <span><button className="btn-gray IT">IT</button></span>
                    <span><button className="btn-gray Design">Design</button></span>
                    <span><button className="btn-gray Work">Work</button></span>
                    <span><button className="btn-gray Tech">Tech</button></span>
                </div>
            </section>

            <aside>
                <form className="searchbox-with-position mt-3">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Type of search..."/>
                </form>

                <div className="Recent-Posts">
                    <h3>Recent Posts</h3>
                    <div className="border-bottom-strong"></div>
                        <Link href="#">
                            <h4>How To Blow Through Capital At An Incredible Rate</h4>
                            <p>Jan 14, 2020</p>
                        </Link>

                        <div className="border-bottom"></div>

                        <Link to href="#">
                            <h4>Design Studios That Everyone Should Know About? </h4>
                            <p>Jan 14, 2020</p>
                        </Link>

                        <div className="border-bottom"></div>

                        <Link to="#">
                            <h4>How did we get 1M+ visitors in 30 days without anything!</h4>
                            <p>Jan 14, 2020</p>
                        </Link>

                        <div className="border-bottom"></div>

                        <Link to="#">
                            <h4>Figma On Figma: How We Built Our Website Design System</h4>
                            <p>Jan 14, 2020</p>
                        </Link>
                </div>

                <div className="Categories">
                    <h3>Categories</h3>
                    <div className="border-bottom-strong"></div>
                    
                    <Link to="#">
                        <p className="bold-p">Technology</p>
                        <p className="bold-p">-</p>
                        <p className="gray-p">20 Posts</p>
                    </Link>

                    <Link to="#">
                        <p className="bold-p">Freelancing</p>
                        <p className="bold-p">-</p>
                        <p className="gray-p">07 Posts</p>
                    </Link>

                    <Link to="#">
                        <p className="bold-p">Writing</p>
                        <p className="bold-p">-</p>
                        <p className="gray-p">16 Posts</p>
                    </Link>

                    <Link to="#">
                        <p className="bold-p">Marketing</p>
                        <p className="bold-p">-</p>
                        <p className="gray-p">11 Posts</p>
                    </Link>

                    <Link to="#">
                        <p className="bold-p">Business </p>
                        <p className="bold-p">-</p>
                        <p className="gray-p">35 Posts</p>
                    </Link>
                    
                    <Link to="#">
                        <p className="bold-p">Education </p>
                        <p className="bold-p">-</p>
                        <p className="gray-p">14 Posts</p>
                    </Link>
                </div>
            </aside>
        </div>
    </div>
    </main>
  )
}

export default HowToUseDigitalization