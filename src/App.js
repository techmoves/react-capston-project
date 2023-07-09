import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrencies } from './redux/Currencies/myStockcurrenciesSlice';
import Currencies from './component/Currencies';
import CurrencyDetails from './component/CurrencyDetails';
// import './style.css';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Currencies />} />
        <Route path="/details/:symbols" element={<CurrencyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
