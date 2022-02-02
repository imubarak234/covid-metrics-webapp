import React from 'react';
import { NavLink } from 'react-router-dom';

const Naving = () => (
  <div className="navs navigator">
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <NavLink className="navbar-brand navigator w-25" to="/">
          <i className="bi bi-chevron-left navigator" />
          2022
        </NavLink>
        <div className="w-25 d-flex">
          <i className="bi bi-chevron-down w-25" />
          <p className="w-25">Date</p>
        </div>
        <div className="w-25">
          <ul className="navbar-nav">
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