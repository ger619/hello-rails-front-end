import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-duplicates
import greetingReducer from '../reducer/reducer';
// eslint-disable-next-line import/no-duplicates
import { fetchGreeting } from '../reducer/reducer';

const store = configureStore({
  reducer: { greetingReducer },
  middleware: [thunk],
});

store.dispatch(fetchGreeting());

export default store;
