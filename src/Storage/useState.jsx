import { useState } from 'react';

//* Lý do dùng useState vs let: Cả 2 đều thay đổi biến in memory, nhưng ngoài UI thì let không show đúng current value dc
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
      <h1>useState</h1>
      <h3>{apiTitle}</h3>
      <button onClick={load}>Load API</button>
    </>
  );
}

export default StateExample;
