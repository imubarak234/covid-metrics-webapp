import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
