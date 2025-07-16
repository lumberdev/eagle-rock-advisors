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

interface HomePageProps {
  query: string;
  variables: any;
  data: any;
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
    <Suspense fallback={<LoadingFallback />}>
      <div>
        <Hero heroData={pageData.hero} />
        <AboutSection aboutData={pageData.about} />
        <Stats data={pageData.whatWeDo.whatWeDoItems} />
        <Experience experienceData={pageData.experience} />
        <Stats data={pageData.stats.statItems} />
        <InvestmentApproch investmentApprochData={pageData.investmentApproch} />
        <InvestmentCards investmentCardsData={pageData.investmentCards} />
        <History historyData={pageData.history} />
        <Mission missionData={pageData.mission} />
      </div>
    </Suspense>
  );
}
