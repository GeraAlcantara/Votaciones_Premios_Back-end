import express from 'express';
import { login, logout } from '@app/modules/auth/auth.controller';

export const AuthRouter = express.Router();

AuthRouter.route('/auth/github').get(login.github.access);
AuthRouter.route('/auth/github/callback').get(
  login.github.callback,
  login.github.redirect,
);
AuthRouter.route('/auth/failed').get(() => {
  return {};
});
AuthRouter.route('/auth/logout').get(logout);
