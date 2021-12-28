import { auth0 } from '$lib/variables';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<Locals> = async ({ query, locals }) => {
  const code = query.get('code');
  const token = await getToken(code);
  const user = await getUser(token.access_token);

  locals.user = { ...user, expires_in: token.expires_in };

  return {
    status: 302,
    headers: {
      location: '/',
    },
  };
};

async function getUser(token: string) {
  const response = await fetch(`${auth0.domain}/userinfo`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    console.log(await response.text());
  }

  return response.json();
}

async function getToken(code: string) {
  const response = await fetch(`${auth0.domain}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code,
      grant_type: 'authorization_code',
      client_id: auth0.clientId,
      client_secret: auth0.clientSecret,
      redirect_uri: auth0.redirectUri,
    }),
  });

  if (!response.ok) {
    console.error(await response.text());
  }

  return response.json();
}
