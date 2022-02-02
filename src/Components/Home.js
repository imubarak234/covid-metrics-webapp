/* eslint-disable no-console */

import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import world from './images/worldMap.png';

const Home = () => {
  const states = useSelector((state) => state.refreshReducer, shallowEqual);
  console.log(states);
  console.log('Tesing...........');
  return (
    <div>
      <div className="main-land d-flex">
        <div className="w-50">
          <img src={world} alt="world map" id="main-img" className="pe-3" />
        </div>
        <div className="w-50">
          <h2>COVID Statistics</h2>
          <p>From Around the World</p>
        </div>
      </div>
      <div className="mid-section">
        <p>STATS BY CONTINENTS</p>
      </div>
    </div>
  );
};

export default Home;
