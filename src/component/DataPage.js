import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import setting from '../images/gear.png';
import back from '../images/arrow-8.png';
import mic from '../images/microphone.png';
// import "./App.css";
import StockData from './StockData';

function DataPage() {
  const navigate = useNavigate();
  const { StockData } = useSelector((store) => store.Stock);

  const [filterItem, setFilterItem] = useState('');

  const filteredDataPage = StockData.filter((curr) =>
    curr.name.toLowerCase().includes(filterItem.toLowerCase())
  );

  let myDataPage = [];
 
  if (filteredDataPage.length > 0) {
    (myDataPage = filteredDataPage);
  } else {
    myDataPage = StockData;
  }

  return (
    <div className="DataPage">
      <div className="input">
        <button type="button" onClick={() => navigate('/')}><img src={back} alt="back-button" /></button>
        <input type="text" onChange={(e) => setFilterItem(e.target.value)} />
        <button type="button"><img src={mic} alt="mic-button" /></button>
        <button type="button"><img src={setting} alt="settings-button" /></button>
      </div>
      <div className="DataPageItems">
        {myDataPage.map((eachStock) => (
          <StockData key={eachStock.symbol} eachStock={eachStock} />
        ))}
      </div>
    </div>
  );
}

export default DataPage;
