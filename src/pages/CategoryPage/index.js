import React from 'react';

import CategoryHeader from '../../components/CategoryHeader';
import CategoryContentList from '../../components/CategoryContentList';
import withContextProvider from '../../hoc/withContextProvider';

import { CategoryContextProvider } from '../../context/CategoryContext';

import usePageDataFetchLogic from '../../hooks/usePageDataFetchLogic';
import useScrollHandlingLogic from '../../hooks/useScrollHandlingLogic';

function CategoryPage () {
  const { fetchPageData } = usePageDataFetchLogic();

  useScrollHandlingLogic(fetchPageData);

  return (
    <>
      <CategoryHeader />
      <CategoryContentList />
    </>
  );
}

export default withContextProvider(CategoryContextProvider, CategoryPage);
