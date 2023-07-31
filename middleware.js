
// import {withAuth} from 'next-auth/middleware';
// import {NextRequest} from 'next/server';

// const publicPages = [,'/','/home', '/overview', '/search'];

// // export { default } from "next-auth/middleware";


// import createMiddleware from 'next-intl/middleware';
 
// export default intlMiddleware =  createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'tr'],
 
//   // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
//   defaultLocale: 'en',
//   localePrefix: 'never',
// });
 
// export const config = {
//   // Skip all paths that should not be internationalized. This example skips the
//   // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
//   matcher: ['/((?!api|_next|.*\\..*).*)']
// };


import { withAuth } from 'next-auth/middleware';
import createIntlMiddleware from 'next-intl/middleware';

const locales = ['en', 'de'];
const publicPages = ['/', '/login', '/home', '/overview', '/search'];

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'never',
});

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the authorized callback has returned true
  // and not for pages listed in pages.
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: '/login',
    },
  }
);

export default function middleware(req) {
  const publicPathnameRegex = new RegExp(
    '^(/(' + locales.join('|') + '))?(' + publicPages.join('|') + ')?/?$',
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return authMiddleware(req);
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
