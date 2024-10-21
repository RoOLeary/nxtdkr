import '../../styles/globals.scss';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ViewTransitions } from 'next-view-transitions';

const poppins = Poppins({
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

export default function TasksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={poppins.className}>
          <div className="bg-[#edede5] text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200">
            {children}
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
