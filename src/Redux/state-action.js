import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  //! state là data của [ 1 component(React thuần) / cả store(Redux) ] . Most of the times it is a object, but it can be any valid JS stuff (string, number, ...)
  initialState: { counter: 100, showCounter: true },
  reducers: {
    increment(state, action) {
      //? action là một object có 2 property: { type: string, payload: obj }, describing what happened
      //*   P1: 'counter/increment', với "counter" lấy từ "name" ở line 4; còn "increment" là tên hàm mình đang gọi
      //*   P2: The object that we pass as the ONLY argument in slice.actions.reducerFn(payload):
      //*      Tương ứng ở đây là line 15 redux-component.jsx:  counterActions.increment( {amount: 10} )
      state.counter += action.payload.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
