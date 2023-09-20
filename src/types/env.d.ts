export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: string;
      APP_PORT?: string;
      DATABASE_URL?: string;
      ACCESS_TOKEN_SECRET?: string;
      REFRESH_TOKEN_SECRET?: string;
    }
  }
}
