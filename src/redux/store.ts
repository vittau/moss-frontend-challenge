import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import iTunes from './ducks/itunes';

const store = configureStore({
  reducer: combineReducers({
    iTunes,
  }),
  middleware: [thunk],
});

export default store;
