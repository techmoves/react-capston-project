import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import myCurrencies from './Currencies';
import Currency from '../components/Currency';

const reducer = (
  state = {
    currencies: { currencies: myCurrencies },
  },
) => state;

const store = configureStore({ reducer });
describe('Render Test', () => {
  it('Component renders correctly', () => {
    const data = {
      name: 'argentina',
      symbol: 'aug',
    };
    const tree = render(
      <MemoryRouter>
        <Provider store={store}>
          <Currency eachCurrency={data} />
        </Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
