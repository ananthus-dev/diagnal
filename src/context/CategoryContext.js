import { createContext, useMemo, useState } from 'react';

const CategoryContext = createContext(null);

const CategoryContextProvider = ({ children }) => {
  //isSearchMode -- true, when the user has entered the minimum number of characters to trigger search
  const [isSearchMode, setIsSearchMode] = useState(false);

  const [pageData, setPageData] = useState({});

  const [searchResults, setSearchResults] = useState([]);

  const ctxValue = useMemo(
    () => ({
      isSearchMode,
      setIsSearchMode,
      pageData,
      setPageData,
      searchResults,
      setSearchResults
    }),
    [isSearchMode, pageData, searchResults]
  );

  return (
    <CategoryContext.Provider value={ctxValue}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContextProvider };

export default CategoryContext;
