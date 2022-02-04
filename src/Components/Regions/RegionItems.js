import React from 'react';
import PropTypes from 'prop-types';

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
