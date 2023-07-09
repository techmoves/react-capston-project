import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from '../redux/Currencies/myStockcurrenciesSlice';
import './style.css';
import back from '../images/arrow-8.png';
import mic from '../images/microphone.png';
import setting from '../images/gear.png';
import right from '../images/arrow-4.png';

function CurrencyDetails() {
  const { symbols } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currencies, currency } = useSelector((store) => store.currencies);
  let currencyDetail = '';
  currencies.forEach((curr) => {
    if (curr.symbol === symbols) {
      currencyDetail = curr.name;
    }
  });

  useEffect(() => {
    dispatch(getCurrency(symbols));
  }, [dispatch]);

  return (
    <div className="mydetail">
      <div className="input">
        <button type="button" onClick={() => navigate('/')}>
          <img src={back} alt="back-option-button" />
        </button>
        <input type="text" />
        <button type="button">
          <img src={mic} alt="microphone-button" />
        </button>
        <button type="button">
          <img src={setting} alt="option-button" />
        </button>
      </div>
      <ul className="myList">
        <li>
          {' '}
          One
          {currencyDetail}
          {' '}
          is worth
        </li>
        <li>
          <span>{currency.usd}</span>
          {' '}
          <span className="the-currency">US dollars</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>
            {currency.cad}
            {' '}
          </span>
          {' '}
          <span className="the-currency">Canadian dollars</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>
            {currency.bhd}
            {' '}
          </span>
          {' '}
          <span className="the-currency">Bahraini dinar</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.kwd}</span>
          {' '}
          <span className="the-currency">Kuwaiti dinar</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.pln}</span>
          {' '}
          <span className="the-currency">Polish złoty</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.thb}</span>
          {' '}
          <span className="the-currency">Thai baht</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ils}</span>
          {' '}
          <span className="the-currency">Israeli new shekel</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.idr}</span>
          {' '}
          <span className="the-currency">Indonesian rupiah</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.czk}</span>
          {' '}
          <span className="the-currency">Czech koruna</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.eur}</span>
          {' '}
          <span className="the-currency">euros</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.btc}</span>
          {' '}
          <span className="the-currency">bitcoin</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.chf}</span>
          {' '}
          <span className="the-currency">Swiss franc</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.sek}</span>
          {' '}
          <span className="the-currency">Swedish krona</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.nok}</span>
          {' '}
          <span className="the-currency">Norwegian Krone</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.dkk}</span>
          {' '}
          <span className="the-currency">Danish Krone</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.aud}</span>
          {' '}
          <span className="the-currency">Australian dollars</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.nzd}</span>
          {' '}
          <span className="the-currency">New Zealand dollars</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.hkd}</span>
          {' '}
          <span className="the-currency">Hong Kong dollars</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.twd}</span>
          {' '}
          <span className="the-currency">New Taiwan dollars</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.sgd}</span>
          {' '}
          <span className="the-currency">Singapore dollars</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.cny}</span>
          {' '}
          <span className="the-currency">Chinese renminbi</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.jpy}</span>
          {' '}
          <span className="the-currency">Japanese yen</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.krw}</span>
          {' '}
          <span className="the-currency">South Korean won</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.inr}</span>
          {' '}
          <span className="the-currency">Indian rupee</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.mxn}</span>
          {' '}
          <span className="the-currency">Mexican peso</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.brl}</span>
          {' '}
          <span className="the-currency">Brazilian real</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.kyd}</span>
          {' '}
          <span className="the-currency">Cayman Island dollar</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.gip}</span>
          {' '}
          <span className="the-currency">Gibraltar pound</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.jod}</span>
          {' '}
          <span className="the-currency">Jordanian dinar</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.omr}</span>
          {' '}
          <span className="the-currency">Omani rial</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>

        <li>
          <span>{currency.aed}</span>
          {' '}
          <span className="the-currency">UAE dirham</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.try}</span>
          {' '}
          <span className="the-currency">Turkish lira</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.huf}</span>
          {' '}
          <span className="the-currency">Hungarian forint</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.clp}</span>
          {' '}
          <span className="the-currency">Chilean peso</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.sar}</span>
          {' '}
          <span className="the-currency">Saudi riyal</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.php}</span>
          {' '}
          <span className="the-currency">Philippine peso</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.myr}</span>
          {' '}
          <span className="the-currency">Malaysian ringgit</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.cop}</span>
          {' '}
          <span className="the-currency">Colombian peso</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.rub}</span>
          {' '}
          <span className="the-currency">Russian ruble</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ron}</span>
          {' '}
          <span className="the-currency">Romanian leu</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.pen}</span>
          {' '}
          <span className="the-currency">Peruvian sol</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.bgn}</span>
          {' '}
          <span className="the-currency">Bulgarian lev</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ars}</span>
          {' '}
          <span className="the-currency">South African Rand</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ars}</span>
          {' '}
          <span className="the-currency">Mozambican Medicash</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ars}</span>
          {' '}
          <span className="the-currency">Zim Dollar</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ars}</span>
          {' '}
          <span className="the-currency">Argentine peso</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ars}</span>
          {' '}
          <span className="the-currency">Saudi Arabia Kuwaiti dinar</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ars}</span>
          {' '}
          <span className="the-currency">CHH</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ars}</span>
          {' '}
          <span className="the-currency">NZD</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ars}</span>
          {' '}
          <span className="the-currency">AUD</span>
          <img className="more-details" src={right} alt="right-arrow" />
        </li>
      </ul>
    </div>
  );
}

export default CurrencyDetails;
