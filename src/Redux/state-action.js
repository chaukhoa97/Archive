import { createSlice } from '@reduxjs/toolkit';

//? Redux 1: createSlice
const counterSlice = createSlice({
  name: 'counter',
  //! state đối với Redux là data của cả store. Most of the times it is a object, but it can be any valid JS stuff (string, number, ...)
  initialState: { counter: 100, showCounter: true },
  reducers: {
    increment(state, action) {
      //? action là một object có 2 property: { type: string, payload: obj }, describing what happened
      //*   type: 'counter/increment', với "counter" lấy từ "name" ở line 4; còn "increment" là tên hàm mình đang gọi
      //*   payload: The object that we pass as the ONLY argument in slice.actions.reducerFn(payload):
      //*      Tương ứng ở đây là line 17 redux-component.jsx:  counterActions.increment( {amount: 10} )
      state.counter += action.payload.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//? Redux 2: export slice.actions
export const counterActions = counterSlice.actions;
export default counterSlice;
