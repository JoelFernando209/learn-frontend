import React from 'react';

import classes from './Text.module.scss';

import CheckList from './CheckList/CheckList';

const Text = () => (
  <div className={classes.Text}>
    <div className={classes.Title}>
      Join the Email List and discover how to advance in your career and go further!
    </div>
    
    <CheckList />
  </div>
);

export default Text;