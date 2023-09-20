import dotenv from 'dotenv';

dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.APP_PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL || '',
  access_token_secret: process.env.ACCESS_TOKEN_SECRET || '',
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET || '',
};
