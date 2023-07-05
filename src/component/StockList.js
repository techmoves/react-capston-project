import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStock } from  '../redux/stock/StockSlice';
import back from "../images/arrow-8.png";
import mic from "../images/microphone.png";
import setting from "../images/gear.png";
import right from "../images/arrow-4.png";
// import "./App.css";

function StockList() {
  const { symbols } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currencies, currency } = useSelector((store) => store.currencies);
  let currencyDetail = "";
  currencies.forEach((curr) => {
    if (curr.symbol === symbols) {
      currencyDetail = curr.name;
    }
  });

  useEffect(() => {
    dispatch(fetchStock(symbols));
  }, []);

  return (
    <div className="details">
      <div className="input">
        <button type="button" onClick={() => navigate("/")}>
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
          {" "}
          One
          {currencyDetail} is worth
        </li>
        <li>
          <span>{currency.usd}</span>{" "}
          <span className="currency">US dollars</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.cad} </span>{" "}
          <span className="currency">Canadian dollars</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.eur}</span> <span className="currency">euros</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.btc}</span> <span className="currency">bitcoin</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.chf}</span>{" "}
          <span className="currency">Swiss franc</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.sek}</span>{" "}
          <span className="currency">Swedish krona</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.nok}</span>{" "}
          <span className="currency">Norwegian Krone</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.dkk}</span>{" "}
          <span className="currency">Danish Krone</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.aud}</span>{" "}
          <span className="currency">Australian dollars</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.nzd}</span>{" "}
          <span className="currency">New Zealand dollars</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.hkd}</span>{" "}
          <span className="currency">Hong Kong dollars</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.twd}</span>{" "}
          <span className="currency">New Taiwan dollars</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.sgd}</span>{" "}
          <span className="currency">Singapore dollars</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.cny}</span>{" "}
          <span className="currency">Chinese renminbi</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.jpy}</span>{" "}
          <span className="currency">Japanese yen</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.krw}</span>{" "}
          <span className="currency">South Korean won</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.inr}</span>{" "}
          <span className="currency">Indian rupee</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.mxn}</span>{" "}
          <span className="currency">Mexican peso</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.brl}</span>{" "}
          <span className="currency">Brazilian real</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.kyd}</span>{" "}
          <span className="currency">Cayman Island dollar</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.gip}</span>{" "}
          <span className="currency">Gibraltar pound</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.jod}</span>{" "}
          <span className="currency">Jordanian dinar</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.omr}</span>{" "}
          <span className="currency">Omani rial</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.bhd} </span>{" "}
          <span className="currency">Bahraini dinar</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.kwd}</span>{" "}
          <span className="currency">Kuwaiti dinar</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.pln}</span>{" "}
          <span className="currency">Polish złoty</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.thb}</span> <span className="currency">Thai baht</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ils}</span>{" "}
          <span className="currency">Israeli new shekel</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.idr}</span>{" "}
          <span className="currency">Indonesian rupiah</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.czk}</span>{" "}
          <span className="currency">Czech koruna</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.aed}</span>{" "}
          <span className="currency">UAE dirham</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.try}</span>{" "}
          <span className="currency">Turkish lira</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.huf}</span>{" "}
          <span className="currency">Hungarian forint</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.clp}</span>{" "}
          <span className="currency">Chilean peso</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.sar}</span>{" "}
          <span className="currency">Saudi riyal</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.php}</span>{" "}
          <span className="currency">Philippine peso</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.myr}</span>{" "}
          <span className="currency">Malaysian ringgit</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.cop}</span>{" "}
          <span className="currency">Colombian peso</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.rub}</span>{" "}
          <span className="currency">Russian ruble</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ron}</span>{" "}
          <span className="currency">Romanian leu</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.pen}</span>{" "}
          <span className="currency">Peruvian sol</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.bgn}</span>{" "}
          <span className="currency">Bulgarian lev</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
        <li>
          <span>{currency.ars}</span>{" "}
          <span className="currency">Argentine peso</span>
          <img className="arrow-dir" src={right} alt="right-arrow" />
        </li>
      </ul>
    </div>
  );
}

export default StockList;
