import { createSlice } from '@reduxjs/toolkit';
import { PostType } from '../interface/index';

const initialState: PostType[] = [];

export const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts(state, action) {
      const postsData = action.payload;
      return [...state, ...postsData];
    },
    initPosts() {
      return initialState;
    },
  },
});

export const { getPosts, initPosts } = posts.actions;
export default posts.reducer;
