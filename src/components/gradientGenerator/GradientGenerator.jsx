import React, { useState } from 'react'

const GradientGenerator = () => {
  const [startColor, setStartColor] = useState('#ff0000');
  const [endColor, setEndColor] = useState('#00ff00');
  const [direction, setDirection] = useState('to right');

  const handleStartColorChange = (e) => {
    setStartColor(e.target.value);
  };

  const handleEndColorChange = (e) => {
    setEndColor(e.target.value);
  };

  const handleDirectionChange = (e) => {
    setDirection(e.target.value);
  };

  const gradientStyle = {
    background: `linear-gradient(${direction}, ${startColor}, ${endColor})`,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      <div style={gradientStyle}>
        <h1>Your Gradient Background</h1>
      </div>
      <div>
        <label>
          Start Color:
          <input type="color" value={startColor} onChange={handleStartColorChange} />
        </label>
        <br />
        <label>
          End Color:
          <input type="color" value={endColor} onChange={handleEndColorChange} />
        </label>
        <br />
        <label>
          Direction:
          <select value={direction} onChange={handleDirectionChange}>
            <option value="to right">To Right</option>
            <option value="to left">To Left</option>
            <option value="to top">To Top</option>
            <option value="to bottom">To Bottom</option>
          </select>
        </label>
      </div>
    </div>
  );

}

export default GradientGenerator