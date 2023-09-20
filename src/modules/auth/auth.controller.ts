import type { NextFunction, Request, Response } from 'express';
import { LoginUserDto, RegisterUserDto } from '@app/modules/auth/dto';
import {
  createUser,
  findUserByEmailOrThrow,
  mapUser,
  validateIfUserExists,
} from '@app/modules/users/user.services';
import { passwordMatches } from '@app/modules/auth/auth.services';
import { generateToken } from '@app/shared/services/tokens';
import { config } from '@app/configs/app.config';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const payload = <RegisterUserDto>req.body;

    await validateIfUserExists(payload.email);

    const user = await createUser(payload);

    res.json(mapUser(user));
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const payload = <LoginUserDto>req.body;
    const user = await findUserByEmailOrThrow(
      payload.email,
      'Invalid credentials',
    );

    await passwordMatches(payload.password, user.password);

    const accessToken = await generateToken(
      { userId: user._id },
      config.access_token_secret,
      '1d',
    );
    const refreshToken = await generateToken(
      { userId: user._id },
      config.refresh_token_secret,
      '30d',
    );

    res.json({
      user: mapUser(user),
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export const refreshToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json({
      message: 'Refresh Token',
    });
  } catch (error) {
    next(error);
  }
};
