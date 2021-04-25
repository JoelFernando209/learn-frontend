import React from 'react';

import classes from './PageBuilder.module.scss';

import Navbar from '../../components/UI/Navbar/Navbar';

const PageBuilder = ({ children, className = '' }) => (
  <>
    <Navbar />
    
    <div className={[classes.Content, className].join(' ')}>
      {children}
    </div>
  </>
);

export default PageBuilder;