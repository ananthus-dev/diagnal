import React, { useState } from 'react';

import loadingImage from '../../assets/images/placeholder_for_missing_posters.png';
import styles from './styles.module.css';

function Image ({ className, imgSrc, altText, showFallback, onClick }) {
  const [showLoader, setShowLoader] = useState(true);

  const onImageLoad = () => {
    setShowLoader(false);
  };

  return (
    <>
      <div className={className} onClick={onClick}>
        {/* This will act as the fallback image when the actual image is loading or failed to load */}
        {showFallback && (
          <img
            className={styles.img}
            src={loadingImage}
            alt={'loading'}
            style={{ display: showLoader ? 'block' : 'none' }}
          />
        )}
        <img
          className={styles.img}
          src={imgSrc}
          alt={altText}
          style={{ display: !showLoader ? 'block' : 'none' }}
          onLoad={onImageLoad}
        />
      </div>
    </>
  );
}

export default Image;
