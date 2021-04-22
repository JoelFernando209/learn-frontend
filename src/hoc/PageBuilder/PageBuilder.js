import React from 'react';

import classes from './PageBuilder.module.scss';

import Navbar from '../../components/UI/Navbar/Navbar';

const PageBuilder = ({ children }) => (
  <>
    <Navbar />
    
    <div className={classes.Content}>
      {children}
    </div>
  </>
);

export default PageBuilder;