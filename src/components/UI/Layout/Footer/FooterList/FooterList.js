import React from 'react';

import classes from './FooterList.module.scss';

import { pages } from '../../../info-ui';

import FooterItem from './FooterItem/FooterItem';

const FooterList = () => (
  <div className={classes.FooterList}>
    {pages.map(({ name, to }) =>
      <FooterItem name={name} to={to} />
    )}
  </div>
);

export default FooterList;