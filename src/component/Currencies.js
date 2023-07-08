import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import setting from '../images/gear.png';
import Currency from './Currency';
import './style.css';
import back from '../images/arrow-8.png';
import mic from '../images/microphone.png';

function Currencies() {
  const navigate = useNavigate();
  const { currencies } = useSelector((store) => store.currencies);

  const [filterItem, setFilterItem] = useState('');

  const filteredCurrencies = currencies.filter(
    (curr) => curr.name.toLowerCase().includes(filterItem.toLowerCase()),
  );

  let myCurrencies = [];

  if (filteredCurrencies.length > 0) {
    myCurrencies = filteredCurrencies;
  } else {
    myCurrencies = currencies;
  }

  return (
    <div className="currencies">
      <div className="input">
        <button type="button" onClick={() => navigate('/')}>
          <img src={back} alt="back-button" />
        </button>
        <input type="text" onChange={(e) => setFilterItem(e.target.value)} />
        <button type="button">
          <img src={mic} alt="mic-button" />
        </button>
        <button type="button">
          <img src={setting} alt="settings-button" />
        </button>
      </div>
      <div className="currenciesItems">
        {myCurrencies.map((eachCurrency) => (
          <Currency key={eachCurrency.symbol} eachCurrency={eachCurrency} />
        ))}
      </div>
    </div>
  );
}

export default Currencies;
