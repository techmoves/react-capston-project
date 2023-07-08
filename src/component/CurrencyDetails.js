import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from '../redux/Currencies/currenciesSlice';
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
  }, []);

  return (
    <div className="details">
      <div className="input">
        <button type="button" onClick={() => navigate('/')}>
          <img src={back} alt="back-button" />
        </button>
        <input type="text" />
        <button type="button">
          <img src={mic} alt="mic-button" />
        </button>
        <button type="button">
          <img src={setting} alt="settings-button" />
        </button>
      </div>
      <ul className="detailsList">
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
          <span className="curName">US dollars</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>
            {currency.cad}
            {' '}
          </span>
          {' '}
          <span className="curName">Canadian dollars</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.eur}</span>
          {' '}
          <span className="curName">euros</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.btc}</span>
          {' '}
          <span className="curName">bitcoin</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.chf}</span>
          {' '}
          <span className="curName">Swiss franc</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.sek}</span>
          {' '}
          <span className="curName">Swedish krona</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.nok}</span>
          {' '}
          <span className="curName">Norwegian Krone</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.dkk}</span>
          {' '}
          <span className="curName">Danish Krone</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.aud}</span>
          {' '}
          <span className="curName">Australian dollars</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.nzd}</span>
          {' '}
          <span className="curName">New Zealand dollars</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.hkd}</span>
          {' '}
          <span className="curName">Hong Kong dollars</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.twd}</span>
          {' '}
          <span className="curName">New Taiwan dollars</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.sgd}</span>
          {' '}
          <span className="curName">Singapore dollars</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.cny}</span>
          {' '}
          <span className="curName">Chinese renminbi</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.jpy}</span>
          {' '}
          <span className="curName">Japanese yen</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.krw}</span>
          {' '}
          <span className="curName">South Korean won</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.inr}</span>
          {' '}
          <span className="curName">Indian rupee</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.mxn}</span>
          {' '}
          <span className="curName">Mexican peso</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.brl}</span>
          {' '}
          <span className="curName">Brazilian real</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.kyd}</span>
          {' '}
          <span className="curName">Cayman Island dollar</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.gip}</span>
          {' '}
          <span className="curName">Gibraltar pound</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.jod}</span>
          {' '}
          <span className="curName">Jordanian dinar</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.omr}</span>
          {' '}
          <span className="curName">Omani rial</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>
            {currency.bhd}
            {' '}
          </span>
          {' '}
          <span className="curName">Bahraini dinar</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.kwd}</span>
          {' '}
          <span className="curName">Kuwaiti dinar</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.pln}</span>
          {' '}
          <span className="curName">Polish złoty</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.thb}</span>
          {' '}
          <span className="curName">Thai baht</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ils}</span>
          {' '}
          <span className="curName">Israeli new shekel</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.idr}</span>
          {' '}
          <span className="curName">Indonesian rupiah</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.czk}</span>
          {' '}
          <span className="curName">Czech koruna</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.aed}</span>
          {' '}
          <span className="curName">UAE dirham</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.try}</span>
          {' '}
          <span className="curName">Turkish lira</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.huf}</span>
          {' '}
          <span className="curName">Hungarian forint</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.clp}</span>
          {' '}
          <span className="curName">Chilean peso</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.sar}</span>
          {' '}
          <span className="curName">Saudi riyal</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.php}</span>
          {' '}
          <span className="curName">Philippine peso</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.myr}</span>
          {' '}
          <span className="curName">Malaysian ringgit</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.cop}</span>
          {' '}
          <span className="curName">Colombian peso</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.rub}</span>
          {' '}
          <span className="curName">Russian ruble</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ron}</span>
          {' '}
          <span className="curName">Romanian leu</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.pen}</span>
          {' '}
          <span className="curName">Peruvian sol</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.bgn}</span>
          {' '}
          <span className="curName">Bulgarian lev</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ars}</span>
          {' '}
          <span className="curName">Argentine peso</span>
          <img className="right-details" src={right} alt="right-arrow" />
        </li>
      </ul>
    </div>
  );
}

export default CurrencyDetails;
