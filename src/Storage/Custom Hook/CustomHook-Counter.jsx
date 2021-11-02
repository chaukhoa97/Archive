import { useState, useEffect } from 'react';

//! Must start with "use"
function useCounter(forward = true) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (forward) {
      setInterval(() => setNum((prevNum) => prevNum + 1), 3000);
    } else {
      setInterval(() => setNum((prevNum) => prevNum - 1), 3000);
    }
  }, [forward]);
  return num;
}

export default useCounter;
