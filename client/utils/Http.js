import axios from 'axios';

const DEFAULT_CONFIG = {
  baseURL: process.env.REACT_APP_URL_API || 'http://0.0.0.0:8000/',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

export const statusCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export default class Http {
  constructor(config = {}) {
    this.config = Object.assign({}, DEFAULT_CONFIG, config);
  }

  authenticated() {
    const storedData = localStorage.getItem('access_token'); // get token from localstorage
    if (storedData) {
      this.config.headers['Authorization'] = 'Bearer ' + storedData;
    }

    return this;
  }

  get(url, params, config = {}) {
    return this.executeRequest(url, {
      ...config,
      params
    });
  }

  post(url, data, config = {}) {
    return this.executeRequest(url, {
      method: 'post',
      ...config,
      data
    });
  }

  patch(url, data, config = {}) {
    return this.executeRequest(url, {
      method: 'patch',
      ...config,
      data
    });
  }

  put(url, data, config = {}) {
    return this.executeRequest(url, {
      method: 'put',
      ...config,
      data
    });
  }

  delete(url, data, config = {}) {
    return this.executeRequest(url, {
      method: 'delete',
      ...config,
      data
    });
  }

  executeRequest(url, config) {
    const finalHeaderConfig = {
      ...this.config.headers,
      ...config.headers
    };
    const finalConfig = {
      ...this.config,
      url,
      ...config,
      headers: {
        ...finalHeaderConfig
      }
    };
  
    return axios
      .request(finalConfig)
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        if (error.response && error.response.status === statusCode.UNAUTHORIZED) {
          if (url != 'login') {
            window.location.href = '/login';
          }
        }
        return Promise.reject(error);
      });
  }
}
