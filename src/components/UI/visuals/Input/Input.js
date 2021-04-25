import React from 'react';

import classes from './Input.module.scss';

const Input = ({ type, placeholder, className = '' }) => (
  <input type={type} placeholder={placeholder} className={[classes.Input, className].join(' ')} />
);

export default Input;