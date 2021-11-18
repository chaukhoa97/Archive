import { useState } from 'react';

//* useState vs let: Cả 2 đều thay đổi variables in memory, nhưng show var đó ra UI thì let không show đúng current value dc
//* state vs props:
// Props are like arguments you pass to a function. They let a parent component pass data to a child component and customize its appearance. For example, a Form can pass a color prop to a Button.
// State is like a component’s memory. It lets a component keep track of some information and change it in response to interactions. For example, a Button might keep track of isHovered state.
//! Reason why component doesnt update when its props change:
// 1. The props weren't updated correctly via setState (WRONG: props.title ='a') (RIGHT: setTitle('a'))
// 2. The reference to the prop stayed the same

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
