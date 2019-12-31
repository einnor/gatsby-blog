
import React from 'react';
import styles from './layout.module.scss';

export default ({ children }) => (
   <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
   </div>
)