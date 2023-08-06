import request from './axios';

export const createComment = async ({ postId, comment }) => {
  const response = await request.post(`/posts/${postId}/comments`, {
    comment: comment,
  });
  return response.data;
};

export const editComment = async ({ postId, commentId, comment }) => {
  const response = await request.put(`/${postId}/comments/${commentId}`, {
    comment: comment,
  });
  return response.data;
};

export const deleteComment = async ({ postId, commentId }) => {
  const response = await request.post(`/${postId}/comments/${commentId}`);
  return response.data;
};
