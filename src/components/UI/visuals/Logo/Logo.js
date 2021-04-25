import React from 'react';
import LogoImg from '../../../../assets/images/logo.svg';

import classes from './Logo.module.scss';

const Logo = ({ hasText, className = '' }) => (
  <div className={[classes.Logo, className].join(' ')}>
    <img src={LogoImg} alt='Logo' />
    
    { hasText && <span className={classes.LogoText}>Learn Frontend</span> }
  </div>
);

export default Logo;