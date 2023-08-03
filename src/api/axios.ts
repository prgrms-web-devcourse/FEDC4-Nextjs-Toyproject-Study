import axios from 'axios';
import { store } from '../store';

const accessToken = store.getState().auth.accessToken;

const request = axios.create({
  baseURL: process.env.REACT_APP_API + '/api',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_KEY,
    Accept: '*/*',
    Authorization: `Bearer ${accessToken}`,
  },
});

export default request;
