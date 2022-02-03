import { auth0 } from '$lib/variables';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = ({ locals }) => {
  locals.user = null;

  const queryParams = new URLSearchParams({ client_id: auth0.clientId, returnTo: auth0.logoutUri });

  return {
    status: 302,
    headers: {
      location: `${auth0.domain}/v2/logout?${queryParams.toString()}`,
    },
  };
};
