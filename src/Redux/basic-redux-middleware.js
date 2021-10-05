import { createStore, applyMiddleware } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    default:
      return state;
  }
};

//* Redux route: a = slice.actions.reducerFn({action.payload}) -> dispatch(a) -> reducer tương ứng -> newState
//? Route with Middleware:  a -> dispatch(a) -> middleware1 -> middleware2... -> reducer tương ứng -> newState
const middleware1 = (storeAPI) => (next) => (action) => {
  //? These will be excecuted EVERY TIME an action is dispatched:
  //*   Do anything here: pass the action onwards with next(action),
  //*     or restart the pipeline with storeAPI.dispatch(action)
  //*   Can also use storeAPI.getState() here
  console.log(action); // returns {type: 'INCREMENT', payload: 1}
  action.payload = 3; //! Middleware có thể thay đổi action trước khi pass the action to the next section
  let result = next(action); //! pass the action onwards, which may be another middleware or the real store.dispatch
  //! Eventually the reducers run and the state is updated
  console.log('next state', storeAPI.getState()); // We can now call storeAPI.getState() and see what the new state is
  return result; //! Luôn return next(action) ở last line trong middleware
  //* Giá trị dc return bởi middleware đầu tiên(dc chạy), cũng là giá trị dispatchResult = store.dispatch({type: 'some/action'})
};
const middleware2 = (storeAPI) => (next) => (action) => {
  //! In reality: Kẹp nhiều middleware và xét theo action type, đụng type nào thì thực hiện middleware đó
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('Added a new todo: ', action.payload);
    }, 1000);
  }

  return next(action);
};
const middlewares = applyMiddleware(middleware1, middleware2); // applyMiddleware(middleware1, middleware2)

const store = createStore(reducer, middlewares); //* createStore(reducer, [initialState], [enhancer(middleware)])

//* store.subscribe( `fn dc chạy mỗi khi store thay đổi` )
store.subscribe(() => {
  console.log('current state', store.getState());
});

store.dispatch({
  type: 'INCREMENT',
  payload: 1,
});
store.dispatch({
  type: 'INCREMENT',
  payload: 5,
});
store.dispatch({
  type: 'DECREMENT',
  payload: 2,
});
