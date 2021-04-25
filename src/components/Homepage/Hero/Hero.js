import React from 'react';

import classes from './Hero.module.scss';

import HeroPortrait from './HeroPortrait/HeroPortrait';
import HeroImg from './HeroImg/HeroImg';

const Hero = () => (
  <div className={classes.Hero}>
    <HeroPortrait />
    <HeroImg />
  </div>
);

export default Hero;