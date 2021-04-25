import React from 'react';

import classes from './Button.module.scss';

const Button = ({ children, onClick, className = '' }) => (
  <div className={[classes.Button, className].join(' ')} onClick={onClick}>
    {children}
  </div>
);

export default Button;