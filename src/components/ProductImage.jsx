import React, { Fragment } from 'react';

const ProductImage = ({ color }) => {
  return (
    <Fragment>
      <h1 className="nike">nike</h1>
      <img src="/assets/img/logo.png" alt="logo" className="logo" />
      <a href="/#" className="share">
        <i className="fas fa-share-alt"></i>
      </a>
      <img
        src={`/assets/img/${color}.png`}
        alt={`${color} shoe`}
        className="shoe show"
        color={color}
      />
    </Fragment>
  );
};

export default ProductImage;
