import React from 'react';

import classes from './LearningIcon.module.scss';

import LostIcon from '../../../../assets/images/undraw/lost-icon.svg';

const LearningIcon = () => (
  <div className={classes.LearningIcon}>
    <img src={LostIcon} alt='Frontend Web Development Learning Path Portrait' />
  </div>
);

export default LearningIcon;