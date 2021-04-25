import React from 'react';

import classes from './Container.module.scss';

import Input from '../../../../../UI/visuals/Input/Input';
import Button from '../../../../../UI/visuals/Button/Button';

const Container = () => (
  <div className={classes.EmailInput}>
    <Input type='text' placeholder='Insert your email...' className={classes.Input} />
    <Button className={classes.Submit}>Join the Email List!</Button>
  </div>
);

export default Container;