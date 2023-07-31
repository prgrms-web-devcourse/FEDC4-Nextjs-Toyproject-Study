import request from './axios';

export const createPost = async (state) => {
  const response = await request.post('/posts', state);
  return response.data;
};

export const getPost = async ({ pageId }) => {
  const response = await request.get(`/posts?page=${pageId}`);
  return response.data;
};

export const getPostDetail = async ({ postId }) => {
  const response = await request.get(`/posts/${postId}`);
  return response.data;
};

export const likePost = async ({ postId }) => {
  const response = await request.put(`/posts/${postId}/likes`);
  return response.data;
};
