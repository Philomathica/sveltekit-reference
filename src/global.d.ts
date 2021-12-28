/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
  VITE_AUTH0_DOMAIN: string;
  VITE_AUTH0_CLIENT_ID: string;
  VITE_AUTH0_CLIENT_SECRET: string;
  VITE_AUTH0_REDIRECT_URI: string;
}

interface Locals {
  user: unknown;
}
