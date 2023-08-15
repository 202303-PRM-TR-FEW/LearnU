import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

const AuthMiddleware = withMiddlewareAuthRequired;


import createMiddleware from 'next-intl/middleware';
const IntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'tr'],
  
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en'
});


export const config = {
  matcher: ['/profile', '/courses',"/saved",'/((?!api|_next|.*\\..*).*)']
};

export default (AuthMiddleware, IntlMiddleware)