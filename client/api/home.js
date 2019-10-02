import Http from '../utils/Http';

export const getMoments = (page = 0) => {
    return new Http().get(`home?page=${page}`);
};