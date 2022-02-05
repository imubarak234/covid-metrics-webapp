/* eslint-disable no-console */

import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import CountryItems from './CountryItems';
import { selecting } from '../../redux/Data';

const CountryPage = () => {
  const states = useSelector((state) => state.refreshReducer, shallowEqual);

  const newState = states.filter((next) => next.picked);

  let count = 0;

  const dispatch = useDispatch();

  const fresh = (args) => {
    dispatch(selecting(args));
  };

  const changes = (next) => {
    let ans = '';
    if ((next % 2) === 0) ans = 'even-sec list-group-item list-group-item-action d-flex justify-content-between px-4';
    else ans = 'odd-sec list-group-item list-group-item-action d-flex justify-content-between px-4';
    return ans;
  };

  const photo = (args) => {
    let ans = '';
    if (args === 'Africa') ans = '/assets/images/Africa.png';
    else if (args === 'Europe') ans = '/assets/images/Europe.png';
    else if (args === 'Asia') ans = '/assets/images/Asia.png';
    else if (args === 'Oceania') ans = '/assets/images/Oceania.png';
    else if (args === 'South America') ans = '/assets/images/South America.png';
    else if (args === 'North America') ans = '/assets/images/North America.png';
    return ans;
  };

  return (
    <div>
      <div className="main-land d-flex">
        <div className="w-50">
          <img src={`${process.env.PUBLIC_URL}${photo(newState[0].continent)}`} alt="world map" id="main-img" />
        </div>
        <div className="w-50 d-flex flex-column justify-content-center">
          <h2>{newState[0].continent}</h2>
        </div>
      </div>
      <div className="mid-section">
        <p className="m-0">STATS BY COUNTRY</p>
      </div>
      <div className="list-group listing">
        {
          newState[0].country.map((next) => {
            count += 1;

            return (
              <CountryItems
                key={next}
                names={next}
                classes={changes(count)}
                fund={fresh}
              />
            );
          })
        }
      </div>
    </div>
  );
};
export default CountryPage;
