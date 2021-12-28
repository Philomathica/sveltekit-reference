import type { GetSession, Handle } from '@sveltejs/kit';
import cookie from 'cookie';

export const handle: Handle = async ({ request, resolve }) => {
  const cookies = cookie.parse(request.headers.cookie || '');

  request.locals.user = cookies.user && JSON.parse(cookies.user);

  const response = await resolve(request);

  response.headers['set-cookie'] = `user=${request.locals.user ? JSON.stringify(request.locals.user) : ''}; path=/; HttpOnly;`;

  return response;
};

export const getSession: GetSession = ({ locals }) => {
  return {
    user: locals.user,
  };
};
