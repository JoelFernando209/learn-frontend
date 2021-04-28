import React from 'react';

import classes from './EmailIcon.module.scss';

import AppreciationIcon from '../../../../../assets/images/undraw/appreciation-icon.svg';

const EmailIcon = () => (
  <div className={classes.EmailIcon}>
    <img src={AppreciationIcon} alt='Appreciation' />
  </div>
);

export default EmailIcon;