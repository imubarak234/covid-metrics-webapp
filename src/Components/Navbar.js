import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

/**
 * Renders a Navigation bar Top screen
 */
const Naving = () => {
  const navigate = useNavigate();

  return (
    <div className="navs navigator">
      <nav className="navbar navbar-expand">
        <div className="container-fluid d-flex justify-content-between">
          <button className="navbar-brand navigator w-25" type="button" id="tops" onClick={() => navigate(-1)}>
            <i className="bi bi-chevron-left navigator" />
            2022
          </button>
          <div className="w-25 d-flex align-items-end">
            <p className="text-nowrap m-0">COVID Metrics</p>
          </div>
          <div className="w-25">
            <ul className="navbar-nav">
              <li className="nav-item pe-4">
                <NavLink className="nav-link fw-normal" to="/">
                  <i className="bi bi-mic navigator" />
                </NavLink>
              </li>
              <li className="nav-item">
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
};

export default Naving;
