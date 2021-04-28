import React from 'react';

import classes from './EmailInput.module.scss';

import EmailIcon from './EmailIcon/EmailIcon';
import Input from '../../../UI/visuals/Input/Input';
import Button from '../../../UI/visuals/Button/Button';

const EmailInput = () => (
  <div className={classes.EmailInput}>
    <EmailIcon />
    <Input type='text' placeholder='Insert your email...' className={classes.Input} />
    <Button className={classes.Submit}>Join the Email List!</Button>
  </div>
);

export default EmailInput;