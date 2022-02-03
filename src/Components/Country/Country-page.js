/* eslint-disable no-console */

import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import CountryItems from './CountryItems';
// import africa from '../images/Africa.png';
// import asia from '../images/Asia.png';
// import euro from '../images/Europe.png';
// import south from '../images/South America.png';
// import north from '../images/North America.png';
// import ocean from '../images/Oceania.png';

const CountryPage = () => {
  const states = useSelector((state) => state.refreshReducer, shallowEqual);

  const newState = states.filter((next) => next.picked);

  console.log(newState);

  let count = 0;

  const changes = (next) => {
    let ans = '';
    if ((next % 2) === 0) ans = 'even-sec list-group-item list-group-item-action';
    else ans = 'odd-sec list-group-item list-group-item-action';
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

  // const photo2 = require('../images/Africa.png').default;

  console.log(photo(newState[0].continent));

  return (
    <div>
      <div className="main-land d-flex">
        <div className="w-50">
          <img src={`${process.env.PUBLIC_URL}${photo(newState[0].continent)}`} alt="world map" id="main-img" className="pe-3" />
        </div>
        <div className="w-50">
          <h2>{newState[0].continent}</h2>
        </div>
      </div>
      <div className="mid-section">
        <p>STATS BY COUNTRY</p>
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
              />
            );
          })
        }
      </div>
    </div>
  );
};
export default CountryPage;
