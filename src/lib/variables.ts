export const auth0 = {
  // TODO: remove VITE prefix afeter 2.7 update
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  clientSecret: import.meta.env.VITE_AUTH0_CLIENT_SECRET,
  redirectUri: import.meta.env.VITE_AUTH0_REDIRECT_URI,
};
