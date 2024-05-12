export { default } from 'next-auth/middleware';

export const config = { matcher: ['/questions/new', '/questions/edit/:id+'] };
