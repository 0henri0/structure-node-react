import Http from '../../utils/Http';

export const getCategories = (page = 0) => {
  return new Http().get(`admin/categories?page=${page}`);
};

export const postCategory = (data) => {
  return new Http().post(`admin/categories/create`, data);
};

export const editCategory = (id, data) => {
  return new Http().put(`admin/categories/${id}/edit`, data);
};

export const getDetailCategory = (id) => {
  return new Http().get(`admin/categories/${id}`);
};

export const deleteCategory = (id) => {
  return new Http().delete(`admin/categories/${id}`);
};

export const getCategoriesAll = () => {
  return new Http().get(`admin/categories/all`);
};
