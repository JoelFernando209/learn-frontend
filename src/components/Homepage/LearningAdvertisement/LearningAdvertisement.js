import React from 'react';

import classes from './LearningAdvertisement.module.scss';

import LearningIcon from './LearningIcon/LearningIcon';
import Text from './Text/Text';

const LearningAdvertisement = () => (
  <div className={classes.LearningAdvertisement}>
    <LearningIcon />
    <Text />
  </div>
);

export default LearningAdvertisement;