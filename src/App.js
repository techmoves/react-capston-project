import "./App.css";
import { Route, Routes } from 'react-router-dom';
import StockList from "./component/StockList";
import DataPage from "./component/DataPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStockData } from "./redux/stock/StockSlice";
// import StockData from "./component/StockData";

function App() {
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(fetchStockData());
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<DataPage />} />
        <Route path="/Stocklist/:symbols" element={<StockList />} />
      </Routes>
    </div>
  );
}

export default App;
