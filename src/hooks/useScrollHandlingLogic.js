import { useCallback, useContext, useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';

import CategoryContext from '../context/CategoryContext';

const useScrollHandlingLogic = fetchPageData => {
  const {
    isSearchMode,
    pageData: { totalItems, currentPage, contentList }
  } = useContext(CategoryContext);

  const prevScrollTop = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollTop = document.documentElement.scrollTop;

    //checking if scrolling down, is searchmode and all items already loaded
    if (
      currentScrollTop > prevScrollTop.current &&
      !isSearchMode &&
      contentList.length < totalItems
    ) {
      const maxScrollTop =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      //triggering API call when user has scrolled 70% of viewport height
      const isScrollPositionThresholdCrossed =
        currentScrollTop >= 0.7 * maxScrollTop;

      if (isScrollPositionThresholdCrossed) {
        fetchPageData(+currentPage + 1);
      }
    }

    prevScrollTop.current = currentScrollTop;
  }, [isSearchMode, contentList, currentPage, fetchPageData, totalItems]);

  useEffect(() => {
    const throttledScrollHandler = throttle(handleScroll, 200);

    document.addEventListener('scroll', throttledScrollHandler);

    return () => document.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);
};

export default useScrollHandlingLogic;
