/// <reference types="@sveltejs/kit" />

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ImportMetaEnv {}

declare namespace NodeJS {
  interface ProcessEnv {
    AUTH0_DOMAIN: string;
    AUTH0_CLIENT_ID: string;
    AUTH0_CLIENT_SECRET: string;
    AUTH0_REDIRECT_URI: string;
    AUTH0_LOGOUT_URI: string;
    NODE_ENV: 'development' | 'production';
  }
}
