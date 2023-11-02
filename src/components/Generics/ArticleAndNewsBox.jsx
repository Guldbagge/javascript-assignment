import React from 'react';
import { Link } from 'react-router-dom';

const ArticleAndNewsBox = ({ url, img, date, month, description, title, titleNext, descriptionOne, descriptionTwo, }) => {
  return (
    <Link className="image-and-text" to={url}>
      <div className="image-article">
        <img src={img} alt={`Image of ${title}`} />
        <div className="date">
          <h3>{date}</h3>
          <p>{month}</p>
        </div>
      </div>
      <p className="grey-large">{description}</p>
      <h3>{title} <br /> {titleNext} </h3>
      <p className="grey">{descriptionOne}<br />{descriptionTwo}</p>
    </Link>
  );
};

export default ArticleAndNewsBox;
