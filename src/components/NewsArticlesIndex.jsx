import React, { useContext, useEffect, useState } from 'react';
import { ArticlesContext } from'../components/componentsNews/ArticlesContext';
import NewsBox from '../components/componentsNews/NewsBox';
import Button from './parts/Button';

function OurNewsArticles() {
  const articles = useContext(ArticlesContext);
  const [loadedArticles, setLoadedArticles] = useState([]);

  useEffect(() => {
    if (articles.length > 0) {
      const firstThreeArticles = articles.slice(0, 3);
      setLoadedArticles(firstThreeArticles);
    }
  }, [articles]);

  if (loadedArticles.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="our-news-articles article-and-news">
      <div className="container">
        <div className="heading-and-btn">
          <div className="heading">
              <p className="article-red-text">Article & News</p>
              <h2>Get Every Single Articles & News</h2>
          </div>
          
          <div className="button">
              <Button type="transparent" titel="Browse Articles" url="/news" />
          </div>
        </div>

        <div className="wrapper-articles">
          {loadedArticles.map((article) => (
            <NewsBox key={article.id} title={article.title} content={article.content} author={article.author} published={article.published} category={article.category}  imageUrl={article.imageUrl} />
          ))}
        </div>
      </div>
      <div className="dots">
                    <i className="fa-solid fa-period fa-2xl"></i><i className="fa-duotone fa-period fa-2xl"></i><i className="fa-duotone fa-period fa-2xl"></i><i className="fa-duotone fa-period fa-2xl"></i><i className="fa-duotone fa-period fa-2xl"></i>
                </div>
    </section>
  );
}

export default OurNewsArticles;
