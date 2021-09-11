import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 100, showCounter: true },
  reducers: {
    increment(state, action) {
      //? action là một object có 2 property: { payload: obj, type: string }
      //*   Value 1: The object that we pass as the ONLY argument in slice.actions.reducerFn(payload) - ở đây là counterActions.increment({amount: 10}) line 15 redux-component.jsx
      //*   Value 2: 'counter/increment', với "counter" lấy từ "name" ở line 4; còn "increment" là tên hàm mình đang gọi
      state.counter += action.payload.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
