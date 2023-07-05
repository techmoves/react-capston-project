import { configureStore } from "@reduxjs/toolkit";
import StockReducer from '../redux/stock/StockSlice';

const store = configureStore({
  reducer: {
    Stock: StockReducer,
  },
});

export default store;
