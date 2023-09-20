import express from 'express';
import { validation } from '@app/shared/middlewares';
import {
  register,
  login,
  refreshToken,
} from '@app/modules/auth/auth.controller';
import { LoginUserDto, RegisterUserDto } from '@app/modules/auth/dto';

export const AuthRouter = express.Router();

AuthRouter.route('/auth/register').post(validation(RegisterUserDto), register);
AuthRouter.route('/auth/login').post(validation(LoginUserDto), login);
AuthRouter.route('/auth/refreshToken').post(refreshToken);
