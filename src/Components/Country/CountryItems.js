/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryItems = (props) => {
  const { names, classes, fund } = props;

  return (
    <NavLink to="/region" className={classes} onClick={() => fund(names)}>
      {names}
    </NavLink>
  );
};

CountryItems.propTypes = {
  names: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  fund: PropTypes.func.isRequired,
};

export default CountryItems;
