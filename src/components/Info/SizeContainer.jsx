import React from 'react';
import Size from './Size';
import { useState } from 'react';

const SizeContainer = ({ currentColor, setCurrentColor }) => {
  const sizes = [7, 8, 9, 10, 11];
  const [currentSize, setCurrentSize] = useState(7);
  return (
    <div className="size-container">
      <h3 className="title">size</h3>
      <div className="sizes">
        {sizes.map(size => {
          return (
            <Size
              key={size}
              currentSize={currentSize}
              setCurrentSize={setCurrentSize}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SizeContainer;
