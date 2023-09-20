import type { Request, Response } from 'express';
import { mapUser } from '@app/modules/users/user.services';
import { UserDocument } from '@app/modules/users/user.model';

export const getCurrentUser = (req: Request, res: Response) => {
  const user = <UserDocument>req.user;

  res.json(mapUser(user));
};
