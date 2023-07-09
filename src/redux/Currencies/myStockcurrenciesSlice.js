import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  currencies: [],
  currency: {},
  isLoading: true,
};

export const getCurrencies = createAsyncThunk(
  'currencies/getCurrencies',
  async (_, thunkAPI) => {
    try {
      const resp = await fetch(
        'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json',
      );
      return resp.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const getCurrency = createAsyncThunk(
  'currency/getCurrency',
  async (name, thunkAPI) => {
    try {
      const resp = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${name}.json`,
      );
      const result = await resp.json();
      const newCur = result[name];
      return newCur;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const myStockcurrenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: {
    [getCurrencies.pending]: (state) => {
      state.isLoading = true;
    },
    [getCurrencies.fulfilled]: (state, action) => {
      state.isLoading = false;

      const curr = action.payload;

      const newCurr = Object.entries(curr).map(([i, v]) => ({
        name: v,
        symbol: i,
      }));
      state.currencies = newCurr;
    },
    [getCurrencies.rejected]: (state) => {
      state.isLoading = false;
    },
    [getCurrency.fulfilled]: (state, action) => {
      state.currency = {};
      state.currency = action.payload;
    },
  },
});

export default myStockcurrenciesSlice.reducer;
