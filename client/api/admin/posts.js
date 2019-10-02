import Http from '../../utils/Http';

export const getPosts = (page = 0) => {
    return new Http().get(`admin/posts?page=${page}`);
};