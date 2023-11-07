import React from 'react';
import { Link } from 'react-router-dom';

const OurNewsArticlesBox = ({ url, title, content, published, imageUrl, category }) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.toLocaleDateString('en-GB', { day: 'numeric' });
    const month = date.toLocaleDateString('en-GB', { month: 'short' });
    return { day, month };
  }

  const { day, month } = formatDate(published);

  return (
    <Link className="image-and-text" to={url}>
      <div className="image-article">
        <img src={imageUrl} alt="Article" />
        <div className="date">
          <h3>{day}</h3>
          <p>{month}</p>
        </div>
      </div>
      <p className="grey category">{category}</p>
      <h3>{title}</h3>
      <p className="grey">{content}</p>
    </Link>
  );
};

export default OurNewsArticlesBox;

