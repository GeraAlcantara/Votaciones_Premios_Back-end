import express from 'express';
import { isAuthenticated } from '@app/modules/auth/middlewares';
import {
  getCurrentUser,
  getUserProfile,
} from '@app/modules/users/user.controller';

export const UserRouter = express.Router();

UserRouter.route('/me').get(isAuthenticated, getCurrentUser);
UserRouter.route('/:displayName').get(getUserProfile);
