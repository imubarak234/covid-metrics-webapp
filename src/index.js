import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Naving from './Components/Navbar';
import Home from './Components/Home';
import store from './redux/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Naving />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
