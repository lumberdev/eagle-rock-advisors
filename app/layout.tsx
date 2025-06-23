import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import './styles.css';

export const metadata: Metadata = {
  title: 'Eagle Rock Advisors',
  description: 'Eagle Rock Advisors Website',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
