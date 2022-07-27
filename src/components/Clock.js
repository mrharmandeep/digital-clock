import { useState, useEffect } from 'react';
function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const clockId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(clockId);
    };
  }, []);
  return (
    <div>
      <h2>CLOCK</h2>
      <span>
        {date.toLocaleTimeString()}
      </span>
    </div>
  );
}
export default Clock;