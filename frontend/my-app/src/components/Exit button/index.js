import React from 'react';
import"./exitbutton.css"

const ExitButton = ({ handleClick }) => {
  return (
    <button className="exit-button" onClick={handleClick}>
      x
    </button>
  );
};

export default ExitButton;