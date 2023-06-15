import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import bgReducer from '@/store/bgSlice';
import menuReducer from '@/store/menuSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      bg: bgReducer,
      menu: menuReducer,
    },
    // middleware(getDefaultMiddleware) {
    //     return getDefaultMiddleware().concat(pokemonApi.middleware);
    // },
  });
export const wrapper = createWrapper(makeStore);
