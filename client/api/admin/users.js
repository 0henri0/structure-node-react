import Http from '../../utils/Http';

export const getUsers = (page = 0) => {
    return new Http().get(`admin/users?page=${page}`);
};