import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_API + '/api',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_KEY,
    Accept: '*/*',
    Authorization: 'Bearer ', //로그인 되면 세션에서 토큰을 가져와야 할거 같아요!!
  },
});

export default request;
