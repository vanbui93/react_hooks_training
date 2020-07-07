import { useEffect, useState } from 'react';

CustomHooks.propTypes = {

};

function formatData(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function CustomHooks(props) {

  const [timeString, setTimeString] = useState();

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const newTimeString = formatData(now);
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      
    }
  }, []);

  return (
    { timeString }
  );
}

export default CustomHooks;