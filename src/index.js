import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CountryPage from './Components/Country/Country-page';
import Naving from './Components/Navbar';
import Home from './Components/Home';
import store from './redux/configureStore';
import Region from './Components/Regions/Region';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Naving />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="/region" element={<Region />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
