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

export const getComment = (id) => {
  return new Http().get(`posts/${id}/comments`);
}

export const postComment = (idPost, data) => {
  return new Http().post(`posts/${idPost}/comments`, data);
}

export const getSearchPosts = (value) => {
  return new Http().get(`search/?key=${value}`);
}

