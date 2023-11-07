import React, { useContext, useEffect, useState } from 'react';
import { ArticlesContext } from'../../components/componentsNews/ArticlesContext';
import NewsBox from '../componentsNewsDetails/NewsBox';

function OurNewsArticles() {
  const articles = useContext(ArticlesContext);
  const [loadedArticles, setLoadedArticles] = useState([]);

  useEffect(() => {
    // Om du vill lagra de första tre artiklarna i en separat state
    if (articles.length > 0) {
      const Articles = articles;
      setLoadedArticles(Articles);
    }
  }, [articles]);

  if (loadedArticles.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="our-news-articles">
      <div className="container">
        <div className="h2"><h2>Our News & Articles</h2></div>

        <div className="wrapper-articles">
          {loadedArticles.map((article) => (
            <NewsBox
              key={article.id}
              title={article.title}
              content={article.content}
              author={article.author}
              published={article.published} 
              category={article.category}
              imageUrl={article.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurNewsArticles;
