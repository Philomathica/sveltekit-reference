import { browser } from '$app/env';

export const auth0 = {
  domain: getServerEnvVar('AUTH0_DOMAIN'),
  clientId: getServerEnvVar('AUTH0_CLIENT_ID'),
  clientSecret: getServerEnvVar('AUTH0_CLIENT_SECRET'),
  redirectUri: getServerEnvVar('AUTH0_REDIRECT_URI'),
  logoutUri: getServerEnvVar('AUTH0_LOGOUT_URI'),
};

function getServerEnvVar(key: keyof NodeJS.ProcessEnv) {
  if (browser) {
    return;
  }

  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable ${key}`);
  }

  return value;
}
