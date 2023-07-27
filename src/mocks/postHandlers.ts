import { DUMMY_POST, DUMMY_POSTS } from './data';
import { rest } from 'msw';

const POSTS = DUMMY_POSTS;
const POST = DUMMY_POST;

export const postHandlers = [
  rest.get('/posts/:postId', async (req, res, ctx) => {
    const { postId } = req.params;
    const post = [POSTS.find((item) => item.postId === +postId)] ?? POST;

    if (post) {
      return res(ctx.status(200), ctx.json(post));
    } else {
      return res(ctx.status(404));
    }
  }),
  rest.put('/posts/:postId/comments', (req, res, ctx) => {
    // TODO
  }),
  rest.put('/posts/:postId/likes', (req, res, ctx) => {
    // TODO
  }),
  rest.put('/posts/:postId/forgiven', (req, res, ctx) => {
    // TODO
  }),
];
