import React from 'react';

import CheckmarkIcon from '../../../../../../assets/images/icons/checkmark-icon.svg';

import classes from './CheckItem.module.scss';

const CheckItem = ({ name }) => (
  <div className={classes.CheckItem}>
    <div className={classes.Checkmark}>
      <img src={CheckmarkIcon} alt='' />
    </div>
  
    {name}
  </div>
);

export default CheckItem;