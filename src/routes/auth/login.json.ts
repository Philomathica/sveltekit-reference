import { auth0 } from '$lib/variables';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<Locals> = () => {
  const queryParams = new URLSearchParams({
    response_type: 'code',
    client_id: auth0.clientId,
    redirect_uri: auth0.redirectUri,
    scope: 'openid profile email',
  });

  return {
    status: 302,
    headers: {
      location: `${auth0.domain}/authorize?${queryParams.toString()}`,
    },
  };
};
