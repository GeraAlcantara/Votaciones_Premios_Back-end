import type { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { UserDocument } from '@app/modules/users/user.types';
import { AccountModel } from '@app/modules/users/models/account.model';
import { UserModel } from '@app/modules/users/models/user.model';

export const getCurrentUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { _id: currentUserId } = req.user as UserDocument;

  const user = await UserModel.findOne({ _id: currentUserId });

  if (!user) {
    return next(createHttpError.NotFound('User not found'));
  }

  const accounts = await AccountModel.find({ user: user._id });

  res.json({
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
    profile: user.profile,
    accounts: accounts.map((account) => ({
      provider: account.provider,
      providerAccountId: account.providerAccountId,
      username: account.username,
    })),
  });
};

export const getUserByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username } = req.params;

  const user = await UserModel.findOne({ username });

  if (!user) {
    return next(createHttpError.NotFound('User not found'));
  }

  res.json({
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
    profile: user.profile,
  });
};
