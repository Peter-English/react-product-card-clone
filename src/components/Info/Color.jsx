import React from 'react';

const Color = ({
  active,
  primary,
  color,
  setCurrentColor,
  setCurrentPrimary,
}) => {
  const handleColorClick = () => {
    setCurrentColor(color);
    setCurrentPrimary(primary);
  };
  return (
    <span
      onClick={handleColorClick}
      className={`color ${active ? 'active' : ''}`}
      primary={primary}
      color={color}
    ></span>
  );
};

export default Color;
