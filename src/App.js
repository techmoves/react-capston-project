import "./App.css";
import { Route, Routes } from 'react-router-dom';
import StockList from "./component/StockList";
import DataPage from "./component/DataPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStock } from "./redux/stock/StockSlice";


function App() {
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(fetchStock());
  }, [dispatch]);

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
