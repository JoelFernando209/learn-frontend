import React from 'react';

import classes from './Footer.module.scss';

import Logo from '../../visuals/Logo/Logo';
import FooterList from './FooterList/FooterList';

const Footer = () => (
  <div className={classes.Footer}>
    <Logo className={classes.Logo} />
    <FooterList />
  </div>
);

export default Footer;