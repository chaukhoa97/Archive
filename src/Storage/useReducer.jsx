import { useReducer } from 'react';

//* const reducer = (prevState, action-to-the-prevState) => newState
//! state is the value at a point of time of a component. Most of the times it is a object, but it can be any valid JS stuff (string, number, ...)
//! Định nghĩa general "reducer" trong progamming: Nhận vào input, transform --> output
const reducer = (state, action) => {
  switch (action) {
    case '+':
      return state + 1;
    case '-':
      return state - 1;
    case 'del':
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
  //? dispatch(action): Describe the action that should be executed when dispatch(action) being triggered(ex: by clicking button,...),
  //?    but NOT EXECUTED THE ACTION DIRECTLY, mà forward qua cho reducer(state, action) - line 3
  //* Ex: action = {key1: 1, key2: 2} -> dispatch(action) -> Gọi reducer(state, action) -> switch(action.key1)...
  const [state, dispatch] = useReducer(reducer, 0); // const reducer = (prevState, action-to-the-prevState) => newState
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
        <h1>useReducer with variable</h1>
        <h3>{state}</h3>
        {/* Click btn -> Gọi dispatch(action) -> Gọi reducer(state, action) - ở đây state là con số đang hiện trên màn hình (line 36: initState = 0) */}
        <button onClick={() => dispatch('+')}>+</button>
        <button onClick={() => dispatch('-')}>-</button>
        <button onClick={() => dispatch('del')}>DEL</button>
      </div>

      <div className="useReducer-with-object">
        <h1>useReducer with object</h1>
        {state2.loading ? <h3>Loading...</h3> : <h3>{state2.data.title}</h3>}
        <button onClick={getUsers}>Get data</button>
      </div>
    </>
  );
}

export default ReducerExample;
