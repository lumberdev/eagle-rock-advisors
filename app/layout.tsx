import React from 'react';
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
// import { monaSans, freightDisplay } from '../assets/fonts/fonts';

import '@/styles.css';

export const metadata: Metadata = {
  title: 'Eagle Rock Advisors',
  description: 'Eagle Rock Advisors Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <html lang="en" className={cn(monaSans.variable, freightDisplay.variable)}> */}
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
