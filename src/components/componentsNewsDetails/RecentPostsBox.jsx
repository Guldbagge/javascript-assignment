import React from 'react';
import { Link } from 'react-router-dom';

const RecentPostsBox = ({ url, title, description, border }) => {
  return (
    <>
      <Link to={url}>
        <h4>{title}</h4>
        <p>{description}</p>
      </Link>

      <div className="border-bottom">{border}
      </div>
    </>
  );
};

export default RecentPostsBox;