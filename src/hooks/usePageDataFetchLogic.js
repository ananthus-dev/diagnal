import { useCallback, useContext, useEffect } from 'react';

import CategoryContext from '../context/CategoryContext';

import { fetchCategoryPageData } from '../services';

const usePageDataFetchLogic = () => {
  const { setPageData } = useContext(CategoryContext);

  //function for getting page data and append to the already loaded data
  const getPageData = useCallback(
    async (pageNum = 1) => {
      try {
        const pageData = await fetchCategoryPageData(pageNum);
        setPageData(prevPageData => {
          return {
            ...pageData,
            contentList: [
              ...(prevPageData.contentList ?? []),
              ...pageData.contentList
            ]
          };
        });
      } catch (e) {}
    },
    [setPageData]
  );

  useEffect(() => {
    //fetching data for the first page on component mount
    getPageData();
  }, [getPageData]);

  return { getPageData };
};

export default usePageDataFetchLogic;
