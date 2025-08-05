'use client';
import { useTina } from 'tinacms/dist/react';
import TeamSection from './TeamSection';
import { PageQuery, PageQueryVariables } from '@/tina/__generated__/types';

interface TeamPageProps {
  query: string;
  variables: PageQueryVariables;
  data: PageQuery;
}

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="animate-pulse text-center">
        <div className="mx-auto mb-4 h-12 w-48 rounded bg-gray-200"></div>
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  );
}

export default function TeamPage({ query, variables, data }: TeamPageProps) {
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {pageData?.teamSection && (
        <TeamSection
          teamSection={pageData?.teamSection}
          containerStyles="pt-[150px] lg:pt-[200px]"
        />
      )}
      {pageData?.managementTeamSection && (
        <TeamSection
          teamSection={pageData?.managementTeamSection}
          containerStyles="pt-[100px]"
          isInvestmentTeam={true}
        />
      )}
    </div>
  );
}
