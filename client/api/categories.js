import Http from '../utils/Http';

export const getCategoriesRightSiderBar = () => {
  return new Http().get(`categories/categoriesRightSiderBar`);
};
