import React from 'react';

import classes from './HeroImg.module.scss';

import HeroPortrait from '../../../../assets/images/undraw/hero-portrait.svg';

const HeroImg = () => (
  <div className={classes.HeroImg}>
    <img src={HeroPortrait} alt='Hero Portrait' />
  </div>
);

export default HeroImg;