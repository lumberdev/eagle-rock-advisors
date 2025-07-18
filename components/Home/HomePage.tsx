'use client';
import { useTina } from 'tinacms/dist/react';
import { Suspense } from 'react';
import Hero from '../Hero';
import AboutSection from './AboutSection';
import Stats from './Stats';
import Experience from './Experience';
import Mission from './Mission';
import InvestmentApproch from './InvestmentApproch';
import InvestmentCards from './InvestmentCards';
import History from './History';
import { PageQuery, PageQueryVariables } from '@/tina/__generated__/types';

interface HomePageProps {
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

export default function HomePage({ query, variables, data }: HomePageProps) {
  const { data: tinaData } = useTina<PageQuery>({
    query,
    variables,
    data,
  });

  if (!tinaData?.page) {
    return <LoadingFallback />;
  }

  const pageData = tinaData.page;

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div>
        {pageData?.hero && <Hero heroData={pageData.hero} />}
        {pageData?.about && <AboutSection aboutData={pageData.about} />}
        {pageData?.whatWeDo?.whatWeDoItems && <Stats data={pageData.whatWeDo.whatWeDoItems} />}
        {pageData?.experience && <Experience experienceData={pageData.experience} />}
        {pageData?.stats?.statItems && <Stats data={pageData.stats.statItems} />}
        {pageData?.investmentApproch && (
          <InvestmentApproch investmentApprochData={pageData.investmentApproch} />
        )}
        {pageData?.investmentCards?.investmentCardsItems && (
          <InvestmentCards investmentCardsData={pageData.investmentCards} />
        )}
        {pageData?.history && <History historyData={pageData.history} />}
        {pageData?.mission && <Mission missionData={pageData.mission} />}
      </div>
    </Suspense>
  );
}
