import Http from '../../utils/Http';

export const getCategories = (page = 0) => {
  return new Http().get(`admin/categories?page=${page}`);
};

export const postCategory = (data) => {
  return new Http().post(`admin/categories/create`, data);
};
