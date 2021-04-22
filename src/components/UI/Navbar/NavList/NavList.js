import React from 'react';

import classes from './NavList.module.scss';

import { pages } from '../../info-ui';

import NavItem from './NavItem/NavItem';

const NavList = () => (
  <div className={classes.NavList}>
    {pages.map(({ name, to }) =>
      <NavItem name={name} to={to} />
    )}
  </div>
);

export default NavList;