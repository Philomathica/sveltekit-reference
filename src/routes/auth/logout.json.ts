import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<Locals> = ({ locals }) => {
  locals.user = null;

  return {
    status: 302,
    headers: {
      location: '/',
    },
  };
};
