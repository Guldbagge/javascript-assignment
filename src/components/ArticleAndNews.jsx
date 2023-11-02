import React from 'react'
import Button from './Generics/Button'
import ArticleAndNewsBox from './Generics/ArticleAndNewsBox'
import NewsWoman from '../assets/image/news-woman.png'
import NewsAi from '../assets/image/news-ai.png'
import NewsBook from '../assets/image/news-book.png'


const ArticleAndNews = () => {
    const articles = [
        { url: "news-details", img: NewsWoman, date: "25", month: "Mars", description: "Business", title:"How To Use Digitalization", titleNext: "In The classNameroom", descriptionOne: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ", descriptionTwo:"Architecto sed hic libero."},
        { url: "news-details", img: NewsAi, date: "17", month: "Mars", description: "Business", title:"How To Implement Chat GPT", titleNext: "In Your Projects", descriptionOne: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ", descriptionTwo:"Architecto sed hic libero."},
        { url: "news-details", img: NewsBook, date: "13", month: "Mars", description: "Business", title:"The Guide To Support", titleNext: "Modern CSS Design", descriptionOne: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ", descriptionTwo:"Architecto sed hic libero."},
    ]

  return (
    <section className="article-and-news">
    <div className="container">
        <div className="heading-and-btn">
            <div className="heading">
                <p className="article-red-text">Article & News</p>
                <h2>Get Every Single Articles & News</h2>
            </div>
            <div className="button">
                <Button type="btn-transparent" titel="Browse Articles" url="/news"/>
            </div>
        </div>

        <div className="wrapper-image-and-text">
        {   articles.map ((article, index) => (
                <ArticleAndNewsBox key={index} url={article.url} img={article.img} date={article.date} month={article.month} description={article.description} titleNext={article.titleNext} title={article.title}  descriptionOne={article.descriptionOne} descriptionTwo={article.descriptionTwo} />
          
            ))}

        </div>
    </div>  

    <div className="dots">
        <i className="fa-solid fa-period fa-2xl"></i><i className="fa-duotone fa-period fa-2xl"></i><i className="fa-duotone fa-period fa-2xl"></i><i className="fa-duotone fa-period fa-2xl"></i><i className="fa-duotone fa-period fa-2xl"></i>
    </div>
</section>
  )
}

export default ArticleAndNews