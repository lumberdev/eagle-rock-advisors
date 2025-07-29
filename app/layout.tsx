import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import './styles.css';

// Assume your site's URL is stored in an environment variable
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://eagle-rock-advisors-git-dev-lumberdevs.vercel.app';

// The relative path to the image from the 'public' folder
const relativeImagePath = '/uploads/og-image.png';

// The final absolute URL for the OpenGraph tag
const absoluteImageUrl = `${siteUrl}${relativeImagePath}`;

export const metadata: Metadata = {
  title: 'Eagle Rock Advisors | Institutional Investor. Local Owner Operator.',
  description:
    'Eagle Rock is a leading full-service, vertically integrated real estate firm driving value in suburban multifamily housing in the Northeast and Mid-Atlantic U.S.',
  openGraph: {
    title: 'Eagle Rock Advisors | Institutional Investor. Local Owner Operator.',
    description:
      'Eagle Rock is a leading full-service, vertically integrated real estate firm driving value in suburban multifamily housing in the Northeast and Mid-Atlantic U.S.',
    images: [
      {
        url: absoluteImageUrl,
        alt: 'Eagle Rock Advisors | Institutional Investor. Local Owner Operator.',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

console.log('absoluteImageUrl', absoluteImageUrl);
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
