import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import counterReducer from './counterSlice.ts';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
