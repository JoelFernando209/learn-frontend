import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.scss';

const NavItem = ({ name, to }) => (
  <NavLink exact to={to} className={classes.NavItem} activeClassName={classes.ActiveNavItem}>
    {name}
  </NavLink>
);

export default NavItem;