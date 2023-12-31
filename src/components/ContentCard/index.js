import React, { memo } from 'react';

import Image from '../Image';

import { IMAGE_BASE_URL } from '../../constants';

import styles from './styles.module.css';

function ContentCard ({ title, image }) {
  return (
    <li className={styles.container}>
      <Image
        className={styles.thumbnail}
        imgSrc={`${IMAGE_BASE_URL}/${image}`}
        altText={title}
        showFallback={true}
      />
      <p>{title}</p>
    </li>
  );
}

export default memo(ContentCard);
