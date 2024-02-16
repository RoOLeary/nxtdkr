import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Nav } from '../components/ui/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NxtDkr',
  description: 'What a pain in the hoop',
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
