import React from 'react';
import newsWoman from '../../assets/image/news-woman.png';
import { Link } from 'react-router-dom';
import RecentPostsBox from './RecentPostsBox';
import CategoriesBox from '../componentsNewsDetails/CategoriesBox';

const HowToUseDigitalization = () => { 
    const recentPosts = [
        {url: "#", title: "How To Blow Through Capital At An Incredible Rate", description: "Jan 14, 2020", border: ""},
        {url: "#", title: "Design Studios That Everyone Should Know About?", description: "Jan 14, 2020", border: ""},
        {url: "#", title: "How did we get 1M+ visitors in 30 days without anything!", description: "Jan 14, 2020", border: ""},
        {url: "#", title: "Figma On Figma: How We Built Our Website Design System", description: "Jan 14, 2020", border: ""}
    ];

    const categories = [
        {url: "#", descriptionOne: "Technology", descriptioTwo:"-", descriptionTree:"20 Posts"},
        {url: "#", descriptionOne: "Freelancing", descriptioTwo:"-", descriptionTree:"07 Posts"},
        {url: "#", descriptionOne: "Writing", descriptioTwo:"-", descriptionTree:"16 Posts"},
        {url: "#", descriptionOne: "Marketing", descriptioTwo:"-", descriptionTree:"11 Posts"},
        {url: "#", descriptionOne: "Business", descriptioTwo:"-", descriptionTree:"35 Posts"},
        {url: "#", descriptionOne: "Education", descriptioTwo:"-", descriptionTree:"14 Posts"},
    ];
    
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
                    
                    
                    {recentPosts.map((service, index) => (
                    <RecentPostsBox key={index} url={service.url} title={service.title} description={service.description} border={service.border}  />
                    ))}

                </div>

                <div className="Categories">
                    <h3>Categories</h3>
                    <div className="border-bottom-strong"></div>

                    {categories.map((categorie, index) => (
                    <CategoriesBox key={index} url={categorie.url}  descriptionOne={categorie.descriptionOne} descriptioTwo={categorie.descriptioTwo} descriptionTree={categorie.descriptionTree} />
                    ))}
                    
                    {/* <Link to="#">
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
                    </Link> */}
                </div>
            </aside>
        </div>
    </div>
    </main>
  )
}

export default HowToUseDigitalization