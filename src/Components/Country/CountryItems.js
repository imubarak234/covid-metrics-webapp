/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryItems = (props) => {
  const { names, classes } = props;

  return (
    <NavLink to="#" className={classes}>
      {names}
    </NavLink>
  );
};

CountryItems.propTypes = {
  names: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

export default CountryItems;
