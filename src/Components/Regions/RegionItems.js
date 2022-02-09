import React from 'react';
import PropTypes from 'prop-types';

/**
 * Region Items function takes given props arguments 
 * and renders it to the DOM
 * @param {props} names - The title of type string 
 * @param {props} deaths - The number of COVID deaths for the region/country 
 * @param {props} recovered - The number of COVID recovered cases for the region/country 
 * @param {props} cases - The number of COVID on going cases for the region/country 
 * @param {props} classes - String representation of bootstrap classes
 * @returns 
 */
const RegionItems = (props) => {
  const {
    names, deaths, recovered, cases, classes,
  } = props;

  return (
    <li className={classes}>
      <p>{names}</p>
      <div>
        <p>
          Deaths:
          {deaths}
        </p>
        <p>
          Recovered:
          {recovered}
        </p>
        <p>
          Cases:
          {cases}
        </p>
      </div>
    </li>
  );
};

RegionItems.propTypes = {
  names: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  cases: PropTypes.number.isRequired,
  classes: PropTypes.string.isRequired,
};
export default RegionItems;
