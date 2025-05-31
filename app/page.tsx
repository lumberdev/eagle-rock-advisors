import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';

export const revalidate = 300;

export default async function Home() {
  // const data = await client.queries.page({
  //   relativePath: `home.mdx`,
  // });

  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}
