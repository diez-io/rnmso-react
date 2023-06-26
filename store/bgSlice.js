import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bgClass: '',
};

const bgSlice = createSlice({
  name: 'bg',
  initialState,
  reducers: {
    setBg: (state, action) => {
      state.bgClass = action.payload;
    },
  },
});

export const { setBg } = bgSlice.actions;
export const selectBg = (state) => state.bg.bgClass;
export default bgSlice.reducer;
