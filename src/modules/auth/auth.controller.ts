import type { Request, Response } from 'express';
import passport from '@app/configs/passport.config';

export const login = {
  github: {
    access: passport.authenticate('github', {
      scope: ['user:email'],
    }),
    callback: passport.authenticate('github', {
      failureRedirect: '/auth/failed',
    }),
    redirect: (req: Request, res: Response) => {
      res.redirect('/');
    },
  },
};

export const logout = (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    req.logout({}, () => null);
  }

  res.json({});
};
