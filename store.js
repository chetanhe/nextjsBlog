import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import mainSlice from 'slices/mainSlice';
import authSlice from './slices/authSlice';

const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      main: mainSlice,
    },
  });
};

export const wrapper = createWrapper(makeStore);
