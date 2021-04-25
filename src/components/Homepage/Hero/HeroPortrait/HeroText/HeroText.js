import React from 'react';

import classes from './HeroText.module.scss';

const HeroText = () => (
  <div className={classes.HeroText}>
    <div className={classes.Title}>
      Become the <span className='important'>Web Developer</span> that you always wanted to be.
    </div>
    
    <div className={classes.Subtitle}>
      Start your journey or elevate your career to the next level
    </div>
  </div>
);

export default HeroText;