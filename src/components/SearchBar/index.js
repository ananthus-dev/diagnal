import React, { useCallback, useContext, useState } from 'react';

import CategoryContext from '../../context/CategoryContext';

import { SEARCH_MAX_CHARS, SEARCH_MIN_CHARS } from '../../constants';

import styles from './styles.module.css';

function SearchBar () {
  const [searchText, setSearchText] = useState('');

  const {
    setSearchResults,
    setIsSearchMode,
    pageData: { contentList }
  } = useContext(CategoryContext);

  const filterContentList = keyword => {
    const searchResults = contentList.filter(item =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearchResults(searchResults);
    setIsSearchMode(true);
  };

  const onChangeSearchText = e => {
    const value = e.target.value;
    setSearchText(value);
    if (value.length >= SEARCH_MIN_CHARS) {
      filterContentList(value);
    } else {
      setIsSearchMode(false);
    }
  };

  return (
    <input
      className={styles.container}
      type='text'
      placeholder={`Enter atleast ${SEARCH_MIN_CHARS} letters of the title`}
      value={searchText}
      onChange={onChangeSearchText}
      minLength={SEARCH_MIN_CHARS}
      maxLength={SEARCH_MAX_CHARS}
      autoFocus
    />
  );
}

export default SearchBar;
