import React from 'react';

import styles from './styles.module.css';

function Info ({ msg }) {
  return <span className={styles.container}>{msg}</span>;
}

export default Info;
