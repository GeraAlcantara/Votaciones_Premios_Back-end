import createHttpError from 'http-errors';
import { UserDocument, UserModel } from '@app/modules/users/user.model';

export const createUser = <T>(data: T): Promise<UserDocument> => {
  return UserModel.create(data);
};

export const findUserByEmailOrThrow = async (
  email: string,
  message = 'User does not exist',
): Promise<UserDocument> => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw createHttpError.BadRequest(message);
  }

  return user;
};

export const validateIfUserExists = async (email: string) => {
  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    throw createHttpError.BadRequest('User already exists');
  }
};

export const mapUser = (user: UserDocument) => {
  const { _id, name, email, picture, status } = user;
  return {
    id: _id,
    name,
    email,
    picture,
    status,
  };
};
