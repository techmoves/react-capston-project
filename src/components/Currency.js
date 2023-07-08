import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import right from '../images/arrow-4.png';

function Currency({ eachCurrency }) {
  const navigate = useNavigate();
  const { name, symbol } = eachCurrency;

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
Currency.propTypes = {
  eachCurrency: PropTypes.objectOf(PropTypes.string, PropTypes.string)
    .isRequired,
};

export default Currency;
