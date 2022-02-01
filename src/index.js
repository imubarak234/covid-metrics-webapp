import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Naving from './Components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Naving />
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
