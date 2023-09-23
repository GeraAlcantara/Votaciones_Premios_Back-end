import express from 'express';
import { login, logout } from '@app/modules/auth/auth.controller';

export const AuthRouter = express.Router();

AuthRouter.route('/discord').get(login.discord.access);
AuthRouter.route('/discord/callback').get(
  login.discord.callback,
  login.discord.redirect,
);
AuthRouter.route('/github').get(login.github.access);
AuthRouter.route('/github/callback').get(
  login.github.callback,
  login.github.redirect,
);
AuthRouter.route('/failed').get(() => {
  return {};
});
AuthRouter.route('/logout').get(logout);
