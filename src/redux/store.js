import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './Currencies/myStockcurrenciesSlice';

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});

export default store;
