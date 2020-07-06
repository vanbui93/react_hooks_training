import React, { useEffect, useState } from 'react';

function formatData (date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
  const [timeString, setTimeString] = useState();

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const newTimeString = formatData(now);
      setTimeString(newTimeString);
    },1000);
  }, []);

  return (
    <div style={{fontSize: '42px'}}>
      <h1>Time Clock</h1>
      {timeString}
    </div>
  );
}

export default Clock;