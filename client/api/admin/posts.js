import Http from '../../utils/Http';

export const getPosts = (page = 0) => {
  return new Http().get(`admin/posts?page=${page}`);
};

export const postPost = (data) => {
  console.log(data)
  return new Http().post(`admin/posts/create`, data);
};

export const editPost = (id, data) => {
  console.log(data)
  return new Http().put(`admin/posts/${id}/edit`, data);
};

export const getDetailPost = (id) => {
  return new Http().get(`admin/posts/${id}`);
};

export const deletePost = (id) => {
  return new Http().delete(`admin/posts/${id}`);
};