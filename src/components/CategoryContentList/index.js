import React, { useContext } from 'react';

import ContentCard from '../ContentCard';

import CategoryContext from '../../context/CategoryContext';

import styles from './styles.module.css';

function CategoryContentList () {
  const {
    pageData: { contentList = [] },
    searchResults,
    isSearchMode
  } = useContext(CategoryContext);

  const listItems = isSearchMode ? searchResults : contentList;
  const noSearchResults = isSearchMode && searchResults.length === 0;

  return (
    <main>
      <ul className={styles.container}>
        {listItems.map(item => (
          <ContentCard
            key={item.id}
            title={item.name}
            image={item['poster-image']}
          />
        ))}
      </ul>
      {noSearchResults && (
        <p className={styles.emptyMsg}>
          Couldn't find any content matching the search keyword
        </p>
      )}
    </main>
  );
}

export default CategoryContentList;
