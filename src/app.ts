import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compresion from 'compression';
import cors from 'cors';
import createHttpError from 'http-errors';

import { AuthRouter } from '@app/modules/auth/auth.route';

export const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compresion());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to API',
  });
});

app.use('/api', AuthRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createHttpError.NotFound('Router not found'));
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  res.send({
    statusCode: error.status || 500,
    message: error.message,
    error: error.name.replace('Error', ''),
  });
});
