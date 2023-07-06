import "./App.css";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import StockList from "./component/StockList";
import StockData from "./component/StockData";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStockData } from "./redux/stock/StockSlice";

function App() {
  const dispatch = useDispatch;
  useEffect(() =>{
    dispatch(fetchStockData());
  },[]);
  
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<StockData />} />
          <Route path="/details/:symbols" element={<StockList />} />
        </Routes>
    </div>
  );
}

export default App;
