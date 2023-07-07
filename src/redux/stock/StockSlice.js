import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  Stock: [],
  StockData: [],
  isLoading: false,
};

//38e68c0e3cb92e9bdb4fd97e12b38e8d
const URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/DataPage.min.json";

export const fetchStock = createAsyncThunk(
  "Stock/fetchStock",
  async (_, thunkAPI) => {
    try {
      const response = await get(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

export const fetchStockData = createAsyncThunk(
  "StockData/fetchStockData",
  async (name, thunkAPI) => {
    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/DataPage/${name}.json`
      );
      // return await response.json();
      const result = await response.json();
      const newCurrency = result[name];
         return newCurrency;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const StockSlice = createSlice({
  name: "Stock",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStock.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchStock.fulfilled]: (state, action) => {
      state.isLoading = false;

      const Stork = action.payload;

      const newCurrency = Object.entries(Stork).map(([i, v]) => ({
        name: v,
        symbol: i,
      }));
      state.Stock = newCurrency;
    },
    [fetchStock.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchStockData.fulfilled]: (state, action) => {
      state.StockData = {};
      state.StockData = action.payload;
    },
  },
});


export default StockSlice.reducer;
