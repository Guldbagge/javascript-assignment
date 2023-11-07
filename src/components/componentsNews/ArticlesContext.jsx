import React, { createContext, useState, useEffect } from 'react';

const ArticlesContext = createContext();

const ArticlesProvider = ({ children }) => {
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
    <ArticlesContext.Provider value={articles}>
      {children}
    </ArticlesContext.Provider>
  );
};

export { ArticlesContext, ArticlesProvider };
