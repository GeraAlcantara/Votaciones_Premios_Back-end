import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compresion from 'compression';
import cors from 'cors';
import session from 'express-session';
import createHttpError from 'http-errors';

import { config } from '@app/configs/app.config';
import passport from '@app/configs/passport.config';
import { AuthRouter } from '@app/modules/auth/auth.route';
import { UserRouter } from '@app/modules/users/user.route';

export const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compresion());
app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(
  session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req: Request, res: Response) => {
  console.log(req.user);
  res.json({
    message: 'Welcome to API',
  });
});

app.use(AuthRouter);
app.use(UserRouter);

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
