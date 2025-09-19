import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mahmudul Hasan - Software Developer Portfolio',
  description: 'A junior developer working on flutter with a competitive programmer',
  keywords: 'software developer,Competitive programmmer, C, C++, Python, Flutter, portfolio',
  authors: [{ name: 'Mahmudul Hasan' }],
  creator: 'Mahmudul Hasan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mahmudul-hasan.dev',
    title: 'Mahmudul Hasan - Software Developer Portfolio',
    description: 'A junior developer working on flutter with a competitive programmer',
    siteName: 'Mahmudul Hasan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahmudul Hasan - Software Developer Portfolio',
    description: 'A junior developer working on flutter with a competitive programmer',
    creator: '@mahmudul_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}