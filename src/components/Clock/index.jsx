import React from 'react';
import './style.scss';
import useClock from './../hooks/useClock';

function Clock() {
  const {timeString} = useClock();
  
  return (
    <div className="clock">
      <h1>Time Clock</h1>
      <p>
        {timeString}
      </p>
    </div>
  );
}

export default Clock;