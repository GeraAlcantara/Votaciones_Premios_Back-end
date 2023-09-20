import type { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.isAuthenticated()) {
    throw createHttpError.BadRequest('Unauthorized');
  } else {
    next();
  }
};
