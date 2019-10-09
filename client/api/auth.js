import Http from '../utils/Http';

export default function apiLogin(data) {
  return new Http().post('/login', data)
}