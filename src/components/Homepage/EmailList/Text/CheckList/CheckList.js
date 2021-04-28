import React from 'react';

import classes from './CheckList.module.scss';

import CheckItem from './CheckItem/CheckItem';

const checkItems = [
  'No spam',
  'Unsubscribe whenever you want',
  'Interesting topics every week'
];

const CheckList = () => (
  <div className={classes.CheckList}>
    {checkItems.map(name => (
      <CheckItem name={name} />
    ))}
  </div>
);

export default CheckList;