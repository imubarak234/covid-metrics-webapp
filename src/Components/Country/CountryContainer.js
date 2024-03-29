import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import CountryItems from './CountryItems';
import { selecting } from '../../redux/Data';
import asia from '../images/Asia.png';
import africa from '../images/Africa.png';
import euro from '../images/Europe.png';
import south from '../images/South_America.png';
import north from '../images/North_America.png';
import ocean from '../images/Oceania.png';

/**
 * The country container handles the sorting and displaying
 * of list of countries to be rendered to the DOM
 */
const CountryPage = () => {
  const states = useSelector((state) => state.refreshReducer, shallowEqual);

  const newState = states.filter((next) => next.picked);

  let count = 0;

  const dispatch = useDispatch();

  /**
   * @function fresh - Dispatches the redux action to select a country from
   * the store.
   * @param {string} args - the id of the selected country
   */
  const fresh = (args) => {
    dispatch(selecting(args));
  };

  /**
   * @function changes - handles assigning bootstrap class to given
   * sections
   * @param {number} next - count even or odd
   * @returns {string} - bootstrap classes
   */
  const changes = (next) => {
    let ans = '';
    if ((next % 2) === 0) ans = 'even-sec list-group-item list-group-item-action d-flex justify-content-between px-4';
    else ans = 'odd-sec list-group-item list-group-item-action d-flex justify-content-between px-4';
    return ans;
  };

  /**
   * @function photo - Controls which photo is to be displayed on the page
   * @param {string} args - the title of picture to display.
   * @returns {string} - file path of the selected picture.
   */
  // const photo = (args) => {
  //    let ans = '';
  //    if (args === 'Africa') ans = '/assets/images/Africa.png';
  //    else if (args === 'Europe') ans = '/assets/images/Europe.png';
  //    else if (args === 'Asia') ans = '/assets/images/Asia.png';
  //    else if (args === 'Oceania') ans = '/assets/images/Oceania.png';
  //    else if (args === 'South America') ans = '/assets/images/South America.png';
  //    else if (args === 'North America') ans = '/assets/images/North America.png';
  //    return ans;
  //  };

  const photo = () => {
    if (newState[0].continent === 'Asia') return asia;
    if (newState[0].continent === 'Europe') return euro;
    if (newState[0].continent === 'Oceania') return ocean;
    if (newState[0].continent === 'South America') return south;
    if (newState[0].continent === 'North America') return north;
    if (newState[0].continent === 'Africa') return africa;
    return '';
  };

  return (
    <div>
      <div className="main-land d-flex">
        <div className="w-50">
          {/* <img src={`${process.env.PUBLIC_URL}${photo(newState[0].continent)}`}
          alt="world map" className="w-100 h-100" /> */}
          <div
            id="img-country"
            style={{
              backgroundImage: `url(${photo()})`,
              width: '100%',
              height: '100%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
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
