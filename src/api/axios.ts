import axios from 'axios';
import { store } from '../store';

const request = axios.create({
  baseURL: process.env.REACT_APP_API + '/api',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_KEY,
    Accept: '*/*',
  },
});

request.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().auth.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default request;
