import express from 'express';
import { login, logout } from '@app/modules/auth/auth.controller';
import { login, logout } from '@app/modules/auth/auth.controller';

export const AuthRouter = express.Router();

AuthRouter.route('/auth/discord').get(login.discord.access);
AuthRouter.route('/auth/discord/callback').get(
  login.discord.callback,
  login.discord.redirect,
);
AuthRouter.route('/auth/failed').get(() => {
  return {};
});
AuthRouter.route('/auth/logout').get(logout);
