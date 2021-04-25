import React from 'react';

import classes from './Homepage.module.scss';

import PageBuilder from '../../hoc/PageBuilder/PageBuilder';
import Hero from '../../components/Homepage/Hero/Hero';

const Homepage = () => (
  <PageBuilder className={classes.Homepage}>
    <Hero />
  </PageBuilder>
);

export default Homepage;