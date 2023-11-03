import React from 'react';
import { Link } from 'react-router-dom';

const OurNewsArticlesBox = ({ url, title, content, published, imageUrl, category }) => {
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  }

  const formattedDate = formatDate(published);

  return (
    <Link className="image-and-text" to={url}>
      <div className="image-article">
        <img src={imageUrl} alt="Article" />
        <div className="date">
          <h3>{formattedDate}</h3>
        </div>
      </div>
      <p className="grey category">{category}</p>
      <h3>{title}</h3>
      <p className="grey">{content}</p>
    </Link>
  );
};

export default OurNewsArticlesBox;
