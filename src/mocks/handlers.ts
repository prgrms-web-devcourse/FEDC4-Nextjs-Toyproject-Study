import { postsHandlers } from './postsHandlers';
import { postHandlers } from './postHandlers';
import { signupHandlers } from './signupHandlers';

export const handlers = [...postsHandlers, ...postHandlers, ...signupHandlers];
