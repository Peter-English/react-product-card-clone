import React from 'react';
import Color from './Color';
import { useState, useEffect } from 'react';

const ColorContainer = ({ currentColor, setCurrentColor }) => {
  const [currentPrimary, setCurrentPrimary] = useState('#2175f5');
  const hexColors = ['#2175f5', '#f84848', '#29b864', '#ff5521', '#444'];
  const colors = ['blue', 'red', 'green', 'orange', 'black'];

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', currentPrimary);
  }, [currentPrimary]);
  return (
    <div className="color-container">
      <h3 className="title">Color</h3>
      <div className="colors">
        {hexColors.map((hexColor, i) => {
          return (
            <Color
              setCurrentColor={setCurrentColor}
              key={hexColor}
              primary={hexColor}
              color={colors[i]}
              active={currentColor === colors[i]}
              setCurrentPrimary={setCurrentPrimary}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColorContainer;
