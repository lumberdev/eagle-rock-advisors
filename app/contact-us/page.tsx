import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import { PageQuery, PageQueryVariables } from '@/tina/__generated__/types';
import { notFound } from 'next/navigation';
import ContactUsPage from '@/components/Contact/ContactUsPage';

const ContactUs = async () => {
  let data: PageQuery | undefined = undefined;
  let query: string = '';
  let variables: PageQueryVariables = { relativePath: `contact-us.mdx` };

  try {
    const res = await client.queries.page(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch (error) {
    console.error(error);
    console.error('Failed to load page data');
  }

  if (!data) return notFound();

  return (
    <Layout>
      <ContactUsPage query={query} variables={variables} data={data} />
    </Layout>
  );
};

export default ContactUs;
