import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {
    orchestra: { name: 'оркестр', link: 'staff' },
    calendar: { name: 'афиша', link: 'calendar' },
    contest: { name: 'конкурс', link: 'contest/members' },
    media: { name: 'медиа', link: 'video' },
    info: { name: 'информация', link: 'info' },
  },
  active: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActiveMenu } = menuSlice.actions;
export const selectActiveMenu = (state) => state.menu.active;
export const selectNavigationRoutes = (state) => state.menu.items;
export default menuSlice.reducer;
