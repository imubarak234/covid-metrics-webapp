import React from 'react';
import { NavLink } from 'react-router-dom';

const Naving = () => (
  <div className="navs navigator">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand navigator" to="/">
          <i className="bi bi-chevron-left navigator" />
          2022
        </NavLink>
        <div className="navbar-nav">
          <i className="bi bi-chevron-down" />
          {' '}
          Date
        </div>
        <div>
          <ul className="navbar-nav topnav">
            <li className="nav-item pe-4">
              <NavLink className="nav-link fw-normal" to="/">
                <i className="bi bi-mic navigator" />
              </NavLink>
            </li>
            <li className="nav-item pe-4">
              <NavLink className="nav-link fw-normal" to="/">
                <i className="bi bi-gear navigator" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Naving;
