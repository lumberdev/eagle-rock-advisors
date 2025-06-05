import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';

export const revalidate = 300;

export default async function Home() {
  try {
    const data = await client.queries.page({
      relativePath: `home.mdx`,
    });
    console.log('Successfully fetched page data:', data);
    
    return (
      <Layout>
        <h1>Home</h1>
      </Layout>
    );
  } catch (error) {
    console.error('Error fetching page data:', error);
    
    return (
      <Layout>
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold mb-4">Welcome to Eagle Rock Advisors</h1>
          <p>Content is being prepared. Please check back soon.</p>
        </div>
      </Layout>
    );
  }
}
