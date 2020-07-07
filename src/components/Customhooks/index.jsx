import React from 'react';
import useClock from './../hooks/useClock';

function CustomHooks() {

  const {timeString} = useClock();

  return (
    <div className="custom-clock">
      <p>
        {timeString}
      </p>
    </div>
  );
}

export default CustomHooks;