import React from 'react';

import classes from './EmailList.module.scss';

import Text from './Text/Text';
import EmailInput from './EmailInput/EmailInput';

const EmailList = () => (
  <div className={classes.EmailList}>
    <Text />
    <EmailInput />
  </div>
);

export default EmailList;