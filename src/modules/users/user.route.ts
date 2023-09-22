import express from 'express';
import { isAuthenticated } from '@app/modules/auth/middlewares';
import { getCurrentUser } from '@app/modules/users/user.controller';

export const UserRouter = express.Router();

UserRouter.route('/me').get(isAuthenticated, getCurrentUser);
