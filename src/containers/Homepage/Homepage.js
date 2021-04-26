import React from 'react';

import classes from './Homepage.module.scss';

import PageBuilder from '../../hoc/PageBuilder/PageBuilder';
import Hero from '../../components/Homepage/Hero/Hero';
import EmailList from '../../components/Homepage/EmailList/EmailList';

const Homepage = () => (
  <PageBuilder className={classes.Homepage}>
    <Hero />
    <EmailList />
  </PageBuilder>
);

export default Homepage;