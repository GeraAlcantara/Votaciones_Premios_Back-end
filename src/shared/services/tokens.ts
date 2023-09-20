import jwt from 'jsonwebtoken';
import { Logger } from '@app/configs/logger.config';

export const generateToken = (
  payload: string | object,
  secret: jwt.Secret,
  expiresIn: string | number,
) => {
  const options: jwt.SignOptions = {
    expiresIn,
  };

  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, options, (error, token) => {
      if (error) {
        Logger.error(error);
        return reject(error);
      }
      return resolve(token);
    });
  });
};
