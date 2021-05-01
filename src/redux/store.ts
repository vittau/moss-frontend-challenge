import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import iTunes from './ducks/itunes';

const store = configureStore({
  reducer: combineReducers({
    iTunes,
  }),
  middleware: [...getDefaultMiddleware(), reduxThunk],
});

export default store;

// https://react-redux.js.org/using-react-redux/usage-with-typescript

// Infer the `RootState` from the store itself
export type RootState = ReturnType<typeof store.getState>;
