import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import classes from './App.module.scss';

import Homepage from './containers/Homepage/Homepage';

const App = () => (
  <Switch>
    <Route path='/' component={Homepage} />
  </Switch>
);

export default App;