import React from 'react';

const BuySection = () => {
  return (
    <div className="buy-price">
      <a href="/#" className="buy">
        <i className="fas fa-shopping-cart"></i>Add to card
      </a>
      <div className="price">
        <i className="fas fa-dollar-sign"></i>
        <h1>149.99</h1>
      </div>
    </div>
  );
};

export default BuySection;
