import type { NextFunction, Request, Response } from 'express';
import { UserWithAccount } from '@app/modules/users/models/user.model';
import * as userService from '@app/modules/users/user.services';
import createHttpError from 'http-errors';

export const getCurrentUser = (req: Request, res: Response) => {
  const account = req.user as UserWithAccount;

  res.json({
    id: account._id,
    username: account.username,
    displayName: account.user.displayName,
    email: account.user.email,
    avatar: account.user.avatar,
  });
};

export const getUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const displayName = req.params.displayName;
  const user = await userService.getUserProfileByUsername(displayName);

  if (!user) {
    return next(createHttpError.NotFound('User not found'));
  }

  return res.json({
    username: user?.displayName,
  });
};
