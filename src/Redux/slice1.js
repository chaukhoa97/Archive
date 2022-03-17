import { createSlice, current } from "@reduxjs/toolkit";

//1 Redux 1: createSlice -> Export actions & slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 666, showCounter: true },
  reducers: {
    increment(state, action) {
      //! Redux state là data của store. Most of the times it is a object.
      //1 action là một object có 2 property: { type: string, payload: obj }, describing what happened
      //2   type: 'counter/increment', với "counter" lấy từ "name" ở line 5; còn "increment" là tên hàm mình đang gọi
      //2   payload: The object that we pass as the value in reducerFn - Line 18 `redux-component`: {amount: 10} trong counterActions.increment({amount: 10})
      state.counter += action.payload.amount;
    },
    toggle(state) {
      console.log(current(state));
      //* Chọn 1 trong 2 -  Tác dụng giống nhau
      state.showCounter = !state.showCounter; // Cách 1
      return { ...state, showCounter: !state.showCounter }; // Cách 2
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
