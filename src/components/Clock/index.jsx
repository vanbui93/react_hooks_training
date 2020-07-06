import React, { useEffect, useState } from 'react';
import './style.scss';

function formatData(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
  const [timeString, setTimeString] = useState();

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const newTimeString = formatData(now);
      setTimeString(newTimeString);
    }, 1000);
  }, []);

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