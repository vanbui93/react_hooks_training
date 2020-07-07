import React, { useEffect, useState } from 'react';

CustomHooks.propTypes = {

};

function formatData(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function CustomHooks() {

  const [timeString, setTimeString] = useState();

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatData(now);
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      //cleanup khi componentUnMount
      console.log('Clock cleanup');
      clearInterval(clockInterval);
    }
  }, []);

  return (
    <div className="clock">
      <h1>Custom hooks</h1>
      <p>
        {timeString}
      </p>
    </div>
  );
}

export default CustomHooks;