import React from 'react';

import classes from './Navbar.module.scss';

import Logo from '../../visuals/Logo/Logo';
import NavList from './NavList/NavList';

const Navbar = () => (
  <div className={classes.Navbar}>
    <Logo hasText className={classes.Logo} />
    <NavList />
  </div>
);

export default Navbar;