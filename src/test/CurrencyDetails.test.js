import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import myCurrencies from './Currencies';
import CurrencyDetails from '../components/CurrencyDetails';
import myCurrency from './Currency';

const reducer = (
  state = {
    currencies: { currencies: myCurrencies, currency: myCurrency },
  },
) => state;

const store = configureStore({ reducer });
describe('Render Test', () => {
  it('Component renders correctly', () => {
    const tree = render(
      <MemoryRouter>
        <Provider store={store}>
          <CurrencyDetails />
        </Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
