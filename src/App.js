import './App.css';
import {BrowserRouter as Routes, Route } from "react-router-dom";
import StockList from './component/StockList';
import StockData from './component/StockData';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<StockData />} />
        <Route path="/display/:symbols" element={<StockList />} />
      </Routes>
    </div>
  );
}

export default App;
