import { createSlice } from '@reduxjs/toolkit';

const champSlice = createSlice({
  name: 'champ',
  initialState: { name: 'Caitlyn', skin: 'bac cuc' },
  reducers: {
    changeName(state, action) {
      state.name = action.payload.name;
    },
    changeSkin(state, action) {
      state.skin = action.payload; // Ko bắt buộc payload phải là 1 object
    },
  },
});

//* Redux Thunk dc tự động thêm vào khi dùng configureStore. Khi Redux Thunk dc enable, bất cứ khi nào bạn dispatch 1 fn thay vì 1 obj (line 25 redux-component.jsx), middleware sẽ gọi fn đó với `dispatch` là 1st argument, và `getState` là 2nd argument
export const changeChamp = (champ) => {
  //! Redux automatically cho argument `dp` ở đây chính là dispatch(= useDispatch())
  return async (dp, getState) => {
    console.log(getState()); // {"name": "Caitlyn", "skin": "bac cuc"}
    dp(champActions.changeName({ name: champ.name }));
    console.log(getState()); // {"name": "Jhin", "skin": "bac cuc"}
    const sendRequest = async () => {
      try {
        await fetch('https://react-http-6b4a6.firebaseio.com/cart.json');
        dp(champActions.changeSkin(champ.skin)); // action ko bắt buộc phải là 1 obj
        console.log(getState()); // {"name": "Jhin", "skin": "hac tinh"}
      } catch (error) {}
    };
    sendRequest();
  };
};

export const champActions = champSlice.actions;
export default champSlice.reducer;

//* Example action creator that returns object:
export function showNotification(text) {
  return { type: 'SHOW_NOTIFICATION', text };
}
