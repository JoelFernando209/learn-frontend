import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './FooterItem.module.scss';

const FooterItem = ({ name, to }) => (
  <NavLink exact to={to} className={classes.FooterItem} activeClassName={classes.ActiveFooterItem}>
    {name}
  </NavLink>
);

export default FooterItem;