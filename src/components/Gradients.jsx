import React, { useEffect } from 'react';

const Gradients = ({ currentColor, prevColor, setPrevColor }) => {
  const colors = ['blue', 'red', 'green', 'orange', 'black'];
  useEffect(() => {
    return () => setPrevColor(currentColor);
  }, [currentColor, setPrevColor]);
  return (
    <div className="gradients">
      {colors.map(color => {
        const classes = `gradient ${color === currentColor && 'display'} ${
          color === prevColor && 'behind'
        }`;
        return <div key={color} className={classes} color={color}></div>;
      })}
    </div>
  );
};

export default Gradients;
