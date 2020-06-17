import React from 'react';

const Size = ({ size, currentSize, setCurrentSize }) => {
  return (
    <span
      onClick={() => setCurrentSize(size)}
      className={`size ${size === currentSize ? 'active' : ''}`}
    >
      {size}
    </span>
  );
};

export default Size;
