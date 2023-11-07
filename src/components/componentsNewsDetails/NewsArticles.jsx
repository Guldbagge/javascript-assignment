import React, { useEffect, useState } from 'react';
import NewsBox from '../componentsNewsDetails/NewsBox';

function NewsArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        if (result.ok) {
          const data = await result.json();
          
          const firstThreeArticles = data.slice(0, 3);
          setArticles(firstThreeArticles);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getArticles();
  }, []);

  return (
    <section className="our-news-articles">
      <div className="container">
        <div className="h2"><h2>Our News & Articles</h2></div>

        <div className="wrapper-articles">
          {articles.map((article) => (
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

export default NewsArticles;
