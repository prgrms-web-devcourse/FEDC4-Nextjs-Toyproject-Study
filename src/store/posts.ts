import { createSlice } from '@reduxjs/toolkit';
import { PostType } from '../interface/index';

const initialState: Array<PostType> = [
  {
    postId: 123,
    title: 'imsy',
    content: 'zzz',
    user: { name: 'haya', nickName: 'haya2' },
    commentCount: 1,
    likeCount: 0,
    forgiveCount: 0,
  },
];

export const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts(state, action) {
      const { postsData } = action.payload;
      state = [...state, postsData];
    },
  },
});

export const { getPosts } = posts.actions;
export default posts.reducer;
