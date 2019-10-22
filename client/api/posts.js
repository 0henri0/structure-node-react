import Http from '../utils/Http';

export const getLastestPosts = (page = 0) => {
  return new Http().get(`posts?page=${page}`);
};

export const getDetail = (id) => {
  return new Http().get(`posts/${id}`);
};

export const getPopularPosts = () => {
  return new Http().get(`posts/popularPosts`);
};
