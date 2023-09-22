import type { Request, Response } from 'express';
import { UserWithAccount } from '@app/modules/users/models/user.model';

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
