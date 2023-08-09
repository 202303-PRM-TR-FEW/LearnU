import ProviderWrapper from '@/store/provider'
import { UserProvider } from "@auth0/nextjs-auth0/client";
import './globals.css'
import { Inter } from 'next/font/google'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

 
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'LearnU',
  description: 'LearnU is a platform for learning new skills and courses.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: "android-chrome",
      href: "/favicon/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "android-chrome",
      href: "/favicon/android-chrome-512x512.png",
      sizes: "512x512",
    },
    {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    }

  ]
}
export default async function RootLayout({ children,params }) {
  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <ProviderWrapper>
        <UserProvider>
          <body className={inter.className}>{children}</body>
        </UserProvider>
      </ProviderWrapper>
    </html>
  )
}
