import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Nav } from '../components/ui/nav';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>
        <Nav menu={nav} />
        {children}
      </body>
    </html>
  );
}
