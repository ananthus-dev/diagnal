export const normalizeCategoryPageData = data => {
  const normalizedContentList = data?.page?.['content-items']?.content?.map(
    item => ({
      id: window.crypto.randomUUID(),
      ...item
    })
  );
  return {
    title: data?.page?.title || '',
    totalItems: data?.page?.['total-content-items'] || 0,
    currentPage: data?.page?.['page-num-requested'] || 1,
    contentList: normalizedContentList || []
  };
};
