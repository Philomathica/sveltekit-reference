import dotenv from 'dotenv';
dotenv.config();

import type { GetSession, Handle } from '@sveltejs/kit';
import cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');

  event.locals.user = cookies.user && JSON.parse(cookies.user);

  const response = await resolve(event);

  response.headers.set(
    'set-cookie',
    cookie.serialize('user', event.locals.user ? JSON.stringify(event.locals.user) : '', {
      path: '/',
      httpOnly: true,
    }),
  );

  return response;
};

export const getSession: GetSession = ({ locals }) => {
  return {
    user: locals.user,
  };
};
