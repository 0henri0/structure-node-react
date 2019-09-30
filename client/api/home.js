import Http from '../utils/Http';

export const getMoments = (page = 1) => {
    return new Http().get(`home?page=${page}`);
};