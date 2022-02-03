/* eslint-disable @typescript-eslint/no-empty-interface */
/// <reference types="@sveltejs/kit" />

interface User {
  name: string;
}

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

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
  interface Locals {
    user: User;
  }

  interface Platform {}

  interface Session {
    user: User;
  }

  interface Stuff {}
}
