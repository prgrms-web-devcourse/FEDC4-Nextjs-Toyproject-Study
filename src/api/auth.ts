import request from './axios';

export const signUp = async (state) => {
  const response = await request.post('/auth/signup', state);
  return response.data;
};

export const signIn = async (state) => {
  const response = await request.post('/auth/signin', state);
  return response.data;
};

export const changePassword = async (state) => {
  const response = await request.put('/auth/password', state);
  return response.data;
};

export const deleteUser = async () => {
  const response = await request.delete('/auth/user');
  return response.data;
};
