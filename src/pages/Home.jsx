import React, { useState } from 'react';
import Gradients from '../components/Gradients';
import ProductImage from '../components/ProductImage';
import InfoPage from '../components/Info/InfoPage';

const Home = () => {
  const [currentColor, setCurrentColor] = useState('blue');
  const [prevColor, setPrevColor] = useState('');

  return (
    <div className="Home">
      <div className="container">
        <div className="card">
          <div className="shoeBackground">
            <Gradients
              currentColor={currentColor}
              prevColor={prevColor}
              setPrevColor={setPrevColor}
            />
            <ProductImage color={currentColor} />
          </div>
          <InfoPage
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
