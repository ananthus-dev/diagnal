import { normalizeCategoryPageData } from '../models/category';

import { DATA_BASE_URL } from '../constants';

export const getCategoryPageData = async pageNum => {
  try {
    const response = await fetch(`${DATA_BASE_URL}/page${pageNum}.json`);
    const data = await response.json();

    return normalizeCategoryPageData(data);
  } catch (e) {
    return Promise.reject(e);
  }
};
