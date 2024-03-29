import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import RegionItems from './RegionItems';
import logo from '../images/worldMap.png';

/**
 * The Region Container sorts the regions and COVID
 * statistics and displays it.
 */
const Region = () => {
  const states = useSelector((state) => state.dataReducer, shallowEqual);

  let count = 0;
  const newState = states.filter((next) => next.picked);

  let newerState = newState[0];

  /**
   * A check to assign an empty array if the value
   * from the store is undefined.
   */
  if (newerState === undefined) {
    newerState = {
      name: 'testing',
      regions: [],
    };
  }

  /**
   * @function changes - handles assigning bootstrap class to given
   * sections
   * @param {number} next - count even or odd
   * @returns {string} - bootstrap classes
   */
  const changes = (next) => {
    let ans = '';
    if ((next % 2) === 0) ans = 'even-sec list-group-item list-group-item-action';
    else ans = 'odd-sec list-group-item list-group-item-action';
    return ans;
  };

  return (
    <div>
      <div className="main-land d-flex">
        <div className="w-50">
          <img src={logo} alt="world map" id="main-img" className="img-fluid" />
        </div>
        <div className="w-50">
          <h2>{newerState.name}</h2>
          <p className="m-0">
            Today Deaths:
            {newerState.today_deaths}
          </p>
          <p className="m-0">
            Today Recovered:
            {newerState.today_recovered}
          </p>
          <p className="m-0">
            Today Cases:
            {newerState.today_recovered}
          </p>
        </div>
      </div>
      <div className="mid-section">
        <p>STATS BY Region</p>
      </div>
      <ul className="list-group listing">
        {
          newerState.regions.map((next) => {
            count += 1;

            return (
              <RegionItems
                key={next.id}
                names={next.name}
                deaths={next.today_confirmed}
                recovered={next.today_recovered}
                cases={next.today_open_cases}
                classes={changes(count)}
              />
            );
          })
        }
      </ul>
      {
        (newerState.regions.length === 0) && <p className="p-3 lead">No Regions in Records</p>
      }
    </div>
  );
};

export default Region;
