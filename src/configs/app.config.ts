import dotenv from 'dotenv';

dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.APP_PORT) || 3000,
  baseUrl: process.env.APP_BASE_URL || '',
  clientUrl: process.env.CLIENT_URL || '',
  databaseUrl: process.env.DATABASE_URL || '',
  sessionSecret: process.env.SESSION_SECRET || '',
  githubClientId: process.env.GITHUB_CLIENT_ID || '',
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET || '',
};
