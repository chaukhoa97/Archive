import { useReducer } from 'react';

//* const reducer = (prevState, action-to-the-prevState) => newState
//* Định nghĩa general "reducer" trong progamming: Nhận vào input, transform --> output
const reducer = (state, action) => {
  switch (action) {
    case '+':
      return state + 1;
    case '-':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
};

//? object Reducer
const initialState = { loading: false, data: [], type: 'success' };
const reducer2 = (state, action) => {
  switch (action.type) {
    case 'loading':
      return { ...initialState, loading: true };
    case 'success':
      console.log(action);
      return action;
    default:
      return state;
  }
};

function ReducerExample() {
  //? dispatch(action): Describe the action that should be executed when dispatch(action) being triggered(ex: by clicking button,...) but NOT EXECUTED THE ACTION DIRECTLY, mà forward qua cho reducer(state, action) - line 3
  //* Ex: action = {key1: 1, key2: 2} -> dispatch(action) -> Gọi reducer(state, action) -> switch(action.key1)...
  const [state, dispatch] = useReducer(reducer, 0); // reducer Là fn ở line 3
  const [state2, dispatch2] = useReducer(reducer2, initialState);
  const getUsers = () => {
    dispatch2({ ...initialState, type: 'loading' });
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => dispatch2({ ...initialState, data: json }));
    }, 1000);
  };

  return (
    <>
      <div className="useReducer-with-variable">
        <h1>useReducer:</h1>
        <h4>With variable</h4>
        <h5>{state}</h5>
        {/* PHẢI PASS callback vào onClick với dispatch nói riêng hay React nói chung */}
        <button onClick={() => dispatch('+')}>+</button>
        <button onClick={() => dispatch('-')}>-</button>
        <button onClick={() => dispatch('reset')}>RESET</button>
      </div>

      <div className="useReducer-with-object">
        <h4>With object</h4>
        {state2.loading ? <h5>Loading...</h5> : <h5>{state2.data.title}</h5>}
        <button onClick={getUsers}>Get data</button>
      </div>
    </>
  );
}

export default ReducerExample;
