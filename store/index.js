'use client';

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import logger from 'redux-logger'

import bgReducer from '@/store/bgSlice';
import menuReducer from '@/store/menuSlice';

const rootReducer = combineReducers({
    bg: bgReducer,
    menu: menuReducer,
})

const makeStore = () =>
  configureStore({
      reducer: rootReducer
    // middleware(getDefaultMiddleware) {
    //     return getDefaultMiddleware().concat(logger);
    // },
  });
export const wrapper = createWrapper(makeStore);
