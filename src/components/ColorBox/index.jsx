import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5); //Math.random return từ 0 đến 1 (nhỏ hơn 1), Math.trunc lấy phần nguyên (Trả về từ 0 => 4)
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const initColor = localStorage.getItem('box-color') || 'deeppink';
  const [color, setColor] = useState(initColor);
  
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem('box-color', newColor);
  }
  
  return (
    <div className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      <h1>Color box</h1>
    </div>
  );
}

export default ColorBox;