import { DUMMY_USER } from './data';
import { rest } from 'msw';

const USER = DUMMY_USER;

export const signupHandlers = [
  rest.post('/auth/signup', async (req, res, ctx) => {
    let newUser;
    if (typeof req.body === 'object') {
      newUser = {
        ...USER,
        loginId: req.body?.loginId || '',
        password: req.body?.password || '',
        nickName: req.body?.nickName || '',
        userName: req.body?.userName || '',
      };
    }

    return res(ctx.status(200), ctx.json(newUser));
  }),
];
