import React, { useEffect, useState } from 'react';
import OurNewsArticlesBox from '../../components/componentsNews/OurNewsArticlesBox'

function OurNewsArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        if (result.ok) {
          const data = await result.json();
          setArticles(data);
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
            <OurNewsArticlesBox
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

        {/* Övrig kod som du vill ha i ditt komponent, som navigationsknappar, etc. */}

      </div>
    </section>
  );
}

export default OurNewsArticles;
