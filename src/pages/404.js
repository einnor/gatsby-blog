import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import styles from './404.module.scss';

export default () => (
  <Layout>
    <div className={styles.content}>
      <h1 className={styles.header}>Page not found</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About Me</Link>
      </div>
      <p className={styles.errorMessage}>
        The page you  are looking for does not exist!
      </p>
    </div>
  </Layout>
);
