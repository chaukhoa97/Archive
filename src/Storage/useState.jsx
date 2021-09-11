import { useState } from 'react';

function StateExample() {
  const [apiTitle, setApiTitle] = useState();

  const load = () => {
    setApiTitle('Loading...');
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => setApiTitle(json.title));
    }, 1000);
  };
  return (
    <>
      <h1>{apiTitle}</h1>
      <button onClick={load}>Load API</button>
    </>
  );
}

export default StateExample;
