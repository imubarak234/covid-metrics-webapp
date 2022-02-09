import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @function CountryItems - recieves data of countries and displays
 * @param {string} props - NAMES the title of country  
 * @param {string} props - CLASSES the bootstrap classes    
 * @param {func} props - FUND function that dispatches reserved redux action
 * @returns 
 */
const CountryItems = (props) => {
  const { names, classes, fund } = props;

  return (
    <NavLink to="/region" className={classes} onClick={() => fund(names)}>
      {names}
      <i className="bi bi-arrow-right-circle" />
    </NavLink>
  );
};

CountryItems.propTypes = {
  names: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  fund: PropTypes.func.isRequired,
};

export default CountryItems;
