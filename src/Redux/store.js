// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice1';
import champReducer from './slice2-action-creator';

//1 Redux 2: configureStore with multi slices, by Redux Toolkit
//* Nhiệm vụ của store: Giữ application state; Truy cập vào state thông qua getState(); Cho phép state update thông qua dispatch(action); Register listenders thông qua fn subscriber(listener); Unregister listeners thông qua fn unsubscribe(listener)
const store = configureStore({
  reducer: {
    counter: counterReducer,
    champ: champReducer,
  },
});

export default store;

//1 REDUX THUẦN with React:
//1 Reducer: Function that is used to update store
// Khi store dc khởi tạo, nó sẽ chạy hàm counterReducer, nhưng lúc đó state chưa tồn tại -> phải khai báo default state
// const counterReducer = (state = { counter: 100, showCounter: true }, action) => {
//   switch (action.type) {
//     case 'increment':
//       //! Với Redux thuần thì ko dc mutate trực tiếp ntn: state.counter += 1, có Redux toolkit thì ok (slice1 line 14)
//       //* Luôn luôn return một State object mới. State dc return này sẽ overwrite default state ở line 5 -> Phải viết showCounter ra luôn
//       return { counter: state.counter + action.amount, showCounter: true };
//     case 'toggle':
//       return { counter: state.counter, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };
// const store = createStore(counterReducer);
// export default store;
