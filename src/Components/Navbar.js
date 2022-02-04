import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Naving = () => {
  const history = useHistory();
  return (
    <div className="navs navigator">
      <nav className="navbar navbar-expand">
        <div className="container-fluid d-flex justify-content-between">
          <NavLink className="navbar-brand navigator w-25" to="/" onClick={() => history.goBack()}>
            <i className="bi bi-chevron-left navigator" />
            2022
          </NavLink>
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
};

export default Naving;
