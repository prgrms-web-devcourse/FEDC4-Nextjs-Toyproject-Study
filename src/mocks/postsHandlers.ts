import { DUMMY_POSTS } from './data';
import { rest } from 'msw';

const POSTS = DUMMY_POSTS;

export const postsHandlers = [
  rest.get('/posts', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(POSTS));
  }),
  rest.post('/posts', async (req, res, ctx) => {
    if (typeof req.body === 'object') {
      const postData = {
        ...POSTS[0],
        postId: POSTS[POSTS.length - 1].postId + 1,
        userId: '',
        title: req.body?.title || '',
        content: req.body?.content || '',
        templateType: req.body?.templateType || '1',
      };
      POSTS.push(postData);
    }
    return res(ctx.status(200), ctx.json(POSTS));
  }),
];
