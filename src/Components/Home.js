/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import world from './images/worldMap.png';
import asia from './images/Asia.png';
import africa from './images/Africa.png';
import euro from './images/Europe.png';
import south from './images/South America.png';
import north from './images/North America.png';
import ocean from './images/Oceania.png';
import { select } from '../redux/Refresh/Refresh';

const Home = () => {
  const states = useSelector((state) => state.refreshReducer, shallowEqual);

  const dispatch = useDispatch();

  const changes = (args) => {
    dispatch(select(args));
  };
  //  dispatch(select('Africa'));

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
      <div className="con-sec container-fluid">
        <div className="row">
          <div className="col-6 odd-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('Africa')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={africa} alt="africa map" className="" />
              <p className="h3 align-self-end">AFRICA</p>
            </NavLink>
          </div>
          <div className="col-6 even-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('Asia')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={asia} alt="asia map" className="" />
              <p className="h3 align-self-end">ASIA</p>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-6 even-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('Europe')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={euro} alt="europe map" className="" />
              <p className="h3 align-self-end">EUROPE</p>
            </NavLink>
          </div>
          <div className="col-6 odd-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('South America')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={south} alt="South America map" className="" />
              <p className="h3 align-self-end">SOUTH AMERICA</p>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-6 odd-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('North America')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={north} alt="North America map" className="" />
              <p className="h3 align-self-end">NORTH AMERICA</p>
            </NavLink>
          </div>
          <div className="col-6 even-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('Oceania')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={ocean} alt="Oceania map" className="" />
              <p className="h3 align-self-end">OCEANIA</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
