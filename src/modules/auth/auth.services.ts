import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';

export const passwordMatches = async (
  password: string,
  hashedPassword: string,
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);

  if (!isMatch) {
    throw createHttpError.BadRequest('Invalid credentials');
  }
};
