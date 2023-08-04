import axios from 'axios';
/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwLCJsb2dpbklkIjoiaGVlVGVzdDEiLCJpYXQiOjE2OTExMjYwNzYsImV4cCI6MTY5MTIxMjQ3Nn0.KKReiEvvYlp4ve1adVCkmP96FfSV8YhZkWyUPbiibzM
*/
const request = axios.create({
  baseURL: process.env.REACT_APP_API + '/api',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_KEY,
    Accept: '*/*',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwLCJsb2dpbklkIjoiaGVlVGVzdDEiLCJpYXQiOjE2OTExMjYwNzYsImV4cCI6MTY5MTIxMjQ3Nn0.KKReiEvvYlp4ve1adVCkmP96FfSV8YhZkWyUPbiibzM',
  },
});

export default request;
