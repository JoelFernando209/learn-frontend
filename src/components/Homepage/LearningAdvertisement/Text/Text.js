import React from 'react';

import classes from './Text.module.scss';

import Button from '../../../UI/visuals/Button/Button';

const Text = () => (
  <div className={classes.Text}>
    <div className={classes.Title}>
      The learning path to <span class='important'>master</span> Web Development
    </div>
    
    <Button className={classes.Button}>Get it now</Button>
  </div>
);

export default Text;