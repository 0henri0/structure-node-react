import Http from '../utils/Http';

export const getMomentDetail = (id) => {
    return new Http().get(`posts/${id}`);
};