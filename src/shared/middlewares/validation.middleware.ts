import type { NextFunction, Request, Response } from 'express';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export const validation = (DtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const DtoInstance = plainToInstance(DtoClass, req.body);
    const errors = await validate(DtoInstance);

    if (errors.length > 0) {
      res.status(400).json({
        messages: errors.map((error) => {
          return error?.constraints ? Object.values(error.constraints) : [];
        }),
      });
    } else {
      req.body = DtoInstance;
      next();
    }
  };
};
