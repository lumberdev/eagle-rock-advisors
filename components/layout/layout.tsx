import React, { PropsWithChildren } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

type LayoutProps = PropsWithChildren & {
  rawPageData?: any;
};

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden pt-20">{children}</main>
      <Footer />
    </>
  );
}
