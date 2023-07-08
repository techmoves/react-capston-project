import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './Currencies/currenciesSlice';

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});

export default store;
