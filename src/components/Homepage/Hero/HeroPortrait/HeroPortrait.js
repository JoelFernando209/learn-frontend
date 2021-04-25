import React from 'react';

import classes from './HeroPortrait.module.scss';

import HeroText from './HeroText/HeroText';
import EmailInput from './EmailInput/EmailInput';

const HeroPortrait = () => (
  <div className={classes.HeroPortrait}>
    <HeroText />
    <EmailInput />
  </div>
);

export default HeroPortrait;