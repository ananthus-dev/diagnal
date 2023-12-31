import { useCallback, useContext, useEffect } from 'react';

import CategoryContext from '../context/CategoryContext';

import { getCategoryPageData } from '../services';

const usePageDataFetchLogic = () => {
  const { setPageData } = useContext(CategoryContext);

  const fetchPageData = useCallback(
    async (pageNum = 1) => {
      try {
        const pageData = await getCategoryPageData(pageNum);
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
    fetchPageData();
  }, [fetchPageData]);

  return { fetchPageData };
};

export default usePageDataFetchLogic;
