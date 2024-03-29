import { NavLink } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import world from './images/worldMap.png';
import asia from './images/Asia.png';
import africa from './images/Africa.png';
import euro from './images/Europe.png';
import south from './images/South_America.png';
import north from './images/North_America.png';
import ocean from './images/Oceania.png';
import { select } from '../redux/Refresh/Refresh';

/**
 * The home component renders a landing page with
 * with links, continents and images
 */
const Home = () => {
  const dispatch = useDispatch();

  /**
   * @function fresh - Dispatches the redux action to select a continent from
   * the store.
   * @param {string} args - the id of the selected continent
   */
  const changes = (args) => {
    dispatch(select(args));
  };

  return (
    <div className="p-3">
      <div className="main-land d-flex w-100">
        <div className="w-50 d-flex align-content-center justify-content-center">
          <img src={world} alt="world map" id="main-img" className="img-fluid" />
        </div>
        <div className="w-50 d-flex flex-column align-item-center justify-content-center">
          <h2>COVID Statistics</h2>
          <p>From Around the World</p>
        </div>
      </div>
      <div className="mid-section">
        <p className="m-0">STATS BY CONTINENTS</p>
      </div>
      <div className="con-sec container-fluid">
        <div className="row">
          <div className="col-6 odd-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('Africa')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={africa} alt="africa map" className="img-fluid" />
              <p className="h3 align-self-end">AFRICA</p>
            </NavLink>
          </div>
          <div className="col-6 even-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('Asia')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={asia} alt="asia map" className="img-fluid" />
              <p className="h3 align-self-end">ASIA</p>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-6 even-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('Europe')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={euro} alt="europe map" className="img-fluid" />
              <p className="h3 align-self-end">EUROPE</p>
            </NavLink>
          </div>
          <div className="col-6 odd-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('South America')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={south} alt="South America map" className="img-fluid" />
              <p className="h3 align-self-end">SOUTH AMERICA</p>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-6 odd-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('North America')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={north} alt="North America map" className="img-fluid" />
              <p className="h3 align-self-end">NORTH AMERICA</p>
            </NavLink>
          </div>
          <div className="col-6 even-sec">
            <NavLink to="/country" className="d-flex flex-column" onClick={() => changes('Oceania')}>
              <i className="bi bi-arrow-right-circle" />
              <img src={ocean} alt="Oceania map" className="img-fluid" />
              <p className="h3 align-self-end">OCEANIA</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
