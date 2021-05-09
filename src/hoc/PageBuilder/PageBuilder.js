import React from 'react';

import classes from './PageBuilder.module.scss';

import Navbar from 'components/UI/Layout/Navbar/Navbar';
import Footer from 'components/UI/Layout/Footer/Footer';

const PageBuilder = ({ children, className = '' }) => (
  <>
    <Navbar />
    
    <div className={[classes.Content, className].join(' ')}>
      {children}
    </div>
    
    <Footer />
  </>
);

export default PageBuilder;