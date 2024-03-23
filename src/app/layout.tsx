import '../styles/globals.scss';

import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';

import { Nav } from '../components/ui/nav';
import { Toaster } from '../components/ui/toaster';

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nxtdkr.vercel.app'),
  title: 'NXTDKR | Base Template',
  description: 'NXTDKR | Base Template',
  keywords: 'Base, Keywords, To Follow',
  // @ts-ignore
  images: [
    {
      url: 'https://busylittlepixels.com/assets/images/heart.webp',
      width: 800,
      height: 600,
    },
    {
      url: 'https://busylittlepixels.com/assets/images/heart.webp',
      width: 1800,
      height: 1600,
      alt: 'NXTDKR | Base Template',
    },
  ],

  openGraph: {
    type: 'website',
    url: 'https://nxtdkr.vercel.app',
    title: `NXTDKR | Base Template`,
    description: `NXTDKR | Base Template`,
    siteName: 'NXTDKR',
    images: [
      {
        url: 'https://busylittlepixels.com/assets/images/heart.webp',
        width: 800,
        height: 600,
      },
      {
        url: 'https://busylittlepixels.com/assets/images/heart.webp',
        width: 1800,
        height: 1600,
        alt: 'NXTDKR | Base Template',
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// eslint-disable-next-line unused-imports/no-unused-vars
const nav = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/web/nav.json`,
)
  .then((res) => res.json())
  .then((res) => res?.data);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={oswald.className}>
        <div className="text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200">
          <Nav />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
