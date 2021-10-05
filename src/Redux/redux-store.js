// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './state-action';
import champSlice from './action-creator';

//? Redux Toolkit:
const store = configureStore({
  reducer: { countReducer: counterSlice.reducer, champReducer: champSlice.reducer },
});

export default store;

//? REDUX THUẦN with React:
//? Reducer: Function that is used to update store
//* Khi store dc khởi tạo, nó sẽ chạy hàm counterReducer, nhưng lúc đó state chưa tồn tại -> phải khai báo default state
// const counterReducer = (state = { counter: 100, showCounter: true }, action) => {
//   switch (action.type) {
//     case 'increment':
//       //! KO DC NHẦM LẪN giữa state: {counter, showCounter} và action: {type, amount}
//       //! TUYỆT ĐỐI KHÔNG DC MUTATE STATE NTN: state.counter += 1;
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
