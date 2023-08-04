import request from './axios';

export const signUp = async (state) => {
  const response = await request.post('/auth/signup', state);
  return response.data;
};

export const signIn = async (state) => {
  const response = await request.post('/auth/signin', state);
  return response.data;
};
