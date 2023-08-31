import request from './axios';

export const createPost = async (state) => {
  const response = await request.post('/posts', state);
  return response.data;
};

interface GetPost {
  pageId: number;
  limitNumber: number;
}

export const getPost = async ({ pageId = 1, limitNumber = 9 }: GetPost) => {
  const response = await request.get(
    `/posts?page=${pageId}&limit=${limitNumber}`,
  );
  return response.data;
};

export const getPostDetail = async ({ postId }) => {
  const response = await request.get(`/posts/${postId}`);
  return response.data;
};

export const likeToggle = async ({ postId }) => {
  const response = await request.put(`/posts/${postId}/likes`);
  return response.data;
};

export const forgive = async ({ postId }) => {
  const response = await request.put(`/posts/${postId}/forgive`);
  return response.data;
};

export const getMyPosts = async () => {
  const response = await request.get(`/posts/mypost`);
  return response.data;
};
