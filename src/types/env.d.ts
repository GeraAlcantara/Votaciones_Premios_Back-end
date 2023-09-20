export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: string;
      APP_PORT?: string;
      APP_BASE_URL?: string;
      CLIENT_URL?: string;
      SESSION_SECRET?: string;
      GITHUB_CLIENT_ID?: string;
      GITHUB_CLIENT_SECRET?: string;
      DATABASE_URL?: string;
    }
  }
}
