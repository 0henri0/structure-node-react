import Http from '../utils/Http';

export default function getMoments(page = 1) {
    return new Http().authenticated().get(`home`);
}