import React, { PropsWithChildren } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { dreaming, monaSans } from '@/assets/fonts/fonts';

type LayoutProps = PropsWithChildren & {
  rawPageData?: any;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${dreaming.variable} ${monaSans.variable}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
