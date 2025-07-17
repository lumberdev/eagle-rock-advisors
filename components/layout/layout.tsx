import React, { PropsWithChildren } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { makarony, monaSans } from '@/assets/fonts/fonts';
import client from '@/tina/__generated__/client';
import { NavigationQuery, NavigationQueryVariables } from '@/tina/__generated__/types';

type LayoutProps = PropsWithChildren & {
  rawPageData?: any;
  headerClassName?: string;
  lightNavbar?: boolean;
};

// Fetch navigation data on the server side
async function getNavigationData() {
  let data: NavigationQuery | undefined = undefined;
  let query = '';
  let variables: NavigationQueryVariables = { relativePath: 'default.json' };

  try {
    const res = await client.queries.navigation(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch (error) {
    console.error(error);
    console.error('Failed to load navigation data');
  }

  return { data, query, variables };
}

export default async function Layout({
  children,
  headerClassName = '',
  lightNavbar = false,
}: LayoutProps) {
  const { data: navigationData } = await getNavigationData();

  // Extract header and footer data from navigation
  const headerData = navigationData?.navigation?.header;
  const footerData = navigationData?.navigation?.footer;

  return (
    <div className={`${makarony.variable} ${monaSans.variable}`}>
      <Header data={headerData} headerClassName={headerClassName} lightNavbar={lightNavbar} />
      <main>{children}</main>
      <Footer data={footerData} />
    </div>
  );
}
