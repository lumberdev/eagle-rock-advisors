'use client';
import React, { Suspense } from 'react';
import { PageQuery, PageQueryVariables } from '@/tina/__generated__/types';
import LoadingFallback from '../Loading/LoadingFallback';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface PrivacyPolicyPageProps {
  query: string;
  variables: PageQueryVariables;
  data: PageQuery;
}

const PrivacyPolicyPage = ({ query, variables, data }: PrivacyPolicyPageProps) => {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  });

  if (!tinaData) {
    return <LoadingFallback />;
  }

  const pageData = tinaData.page;
  if (!pageData) return null;

  console.log(pageData);
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="font-monaSans mx-auto mt-[150px] flex max-w-5xl flex-col px-[25px] pt-[50px] pb-[75px] lg:px-[50px] lg:pt-[25px]">
        <h1 className="text-eagle-navy mb-8 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
        <div className="[&_h6]:text-eagle-navy [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:mt-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-8">
          {pageData.body ? <TinaMarkdown content={pageData.body} /> : null}
        </div>
      </div>
    </Suspense>
  );
};

export default PrivacyPolicyPage;
