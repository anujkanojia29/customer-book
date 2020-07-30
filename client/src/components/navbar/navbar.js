import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import './navbar.css';

const Navbar = ({ title }) => {
  const history = useHistory();
  return (
    <nav className='navbar bg-primary'>
      <h1 className = 'home-navigator' onClick = {() => history.push('/')}>
        { title }
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Customer Book',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
