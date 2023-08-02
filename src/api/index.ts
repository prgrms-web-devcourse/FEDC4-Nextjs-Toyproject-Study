import axios from 'axios';
// import { useQuery } from 'react-query';

const instance = axios.create({
  baseURL: '', // 추후 서버 주소 추가
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
  },
});

export const GET_POSTS = () => {
  return instance({
    url: `/posts`,
    method: 'GET',
  });
};

export const GET_POST = (id: number) => {
  return instance({
    url: `/posts/${id}`,
    method: 'GET',
  });
};

export const POST = (data: object) => {
  return instance({
    url: '/posts',
    data,
    method: 'POST',
  });
};

export const POST_SIGNUP = (data: object) => {
  return instance({
    url: '/auth/signup',
    data,
    method: 'POST',
  });
};

export const PUT_LIKES = (postId: number, data: object) => {
  return instance({
    url: `/posts/${postId}/likes`,
    data,
    method: 'PUT',
  });
};

export const PUT_FORGIVEN = (postId: number, data: object) => {
  return instance({
    url: `/posts/${postId}/forgiven`,
    data,
    method: 'PUT',
  });
};

export const PUT_COMMENT = (postId: number, data: object) => {
  return instance({
    url: `/posts/${postId}/comments`,
    data,
    method: 'PUT',
  });
};
