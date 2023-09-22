import { NextFunction, Request, Response } from 'express';
import passport from '@app/configs/passport.config';

export const login = {
  discord: {
    access: passport.authenticate('discord', {
      scope: ['identify', 'guilds', 'email'],
    }),
    callback: passport.authenticate('discord', {
      failureRedirect: '/auth/failed',
    }),
    redirect: (req: Request, res: Response) => {
      res.redirect('/');
    },
  },
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    const options = {};
    req.logout(options, (err) => {
      if (err) {
        next(err);
      }
    });
  }
  res.json();
};
