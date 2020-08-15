import React, { useState, useEffect } from 'react';

function TimeArea() {

  const [theTime, setTheTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className='Right'>The  current Time is {theTime}.</p>
  )
}

export default TimeArea;