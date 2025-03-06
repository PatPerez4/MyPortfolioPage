import React, { useState, useEffect} from 'react';
import Message from './message';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
  <div>
    <Message></Message>
    <p>The current time is {currentTime}</p>
  </div>
);
}

export default App
