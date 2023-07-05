import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import right from "../images/arrow-4.png";
// import "./App.css";

function StockData({ eachStock }) {
  const navigate = useNavigate();
  const { name, symbol } = eachStock;

  return (
    <button
      type="button"
      className="currency"
      onClick={() => navigate(`/details/${symbol}`)}
    >
      <img className="right" src={right} alt="right-arrow" />

      <span className="name">{name}</span>

      <span className="convert">Convert</span>
    </button>
  );
}
StockData.propTypes = {
  eachStock: PropTypes.objectOf(PropTypes.string, PropTypes.string)
    .isRequired,
};

export default StockData;
