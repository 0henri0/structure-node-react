import Http from '../../utils/Http';

export const getTags = (page = 0) => {
  return new Http().get(`admin/tags?page=${page}`);
};

export const postTag = (data) => {
  return new Http().post(`admin/tags/create`, data);
};

export const editTag = (id, data) => {
  console.log(id);
  return new Http().put(`admin/tags/${id}/edit`, data);
};

export const getDetailTag = (id) => {
  return new Http().get(`admin/tags/${id}`);
};

export const deleteTag = (id) => {
  return new Http().delete(`admin/tags/${id}`);
};

export const getTagsAll = () => {
  return new Http().get(`admin/tags/all`);
};