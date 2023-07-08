import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "./stock/currenciesSlice";

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});

export default store;
