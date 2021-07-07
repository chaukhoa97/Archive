import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  // By using this Hook, you tell React that your component needs to do something after render.
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
