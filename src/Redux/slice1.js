import { createSlice, current } from "@reduxjs/toolkit";

//1 Redux 1: createSlice -> Export actions & slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 666, showCounter: true },
  reducers: {
    increment(state, action) {
      //! Redux state là data của store. Most of the times it is a object.
      //1 action là một object có 2 property: { type: string, payload: obj }, describing what happened
      //*   type: 'counter/increment', với "counter" lấy từ "name" ở line 4; còn "increment" là tên hàm mình đang gọi
      //*   payload: The object that we pass as the value in reducerFn - Line 18 redux-component: {amount: 10} trong counterActions.increment({amount: 10})
      state.counter += action.payload.amount;
    },
    toggle(state) {
      console.log(current(state.orders[0]));
      return { ...state, showCounter: !state.showCounter }; //! Hoặc return CẢ STATE OBJ
      state.showCounter = !state.showCounter; //* Tác dụng i dòng trên
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
