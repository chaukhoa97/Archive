import { createSlice } from '@reduxjs/toolkit';

const champSlice = createSlice({
  name: 'champ',
  initialState: { name: 'caitlyn', skin: 'bac cuc' },
  reducers: {
    changeName(state, action) {
      state.name = action.payload.name;
    },
    changeSkin(state, action) {
      state.skin = action.payload; //* Ko bắt buộc payload phải là 1 object
    },
  },
});

export const champActions = champSlice.actions;
export default champSlice;
