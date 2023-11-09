import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesBox = ({ url, descriptionOne, descriptioTwo, descriptionTree }) => {
  return (
    <>
      <Link to={url}>
      <p className="bold-p">{descriptionOne}</p>
      <p className="bold-p">{descriptioTwo}</p>
      <p className="gray-p">{descriptionTree}</p>
      </Link>
    </>
  );
};

export default CategoriesBox;
