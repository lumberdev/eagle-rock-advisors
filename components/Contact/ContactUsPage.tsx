'use client';
import { useTina } from 'tinacms/dist/react';
import { Suspense } from 'react';
import Hero from '../Hero';
import ContactUsMap from './ContactUsMap';
import ContactUsForm from './ContactUsForm';

interface ContactUsPageProps {
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

export default function ContactUsPage({ query, variables, data }: ContactUsPageProps) {
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
      <div className="font-monaSans flex flex-col items-center justify-center">
        <Hero heroData={pageData.hero} heroContainerStyles="max-h-[300px] md:max-h-[500px]" />
        <div className="flex w-screen flex-col items-center justify-center gap-[25px] px-[25px] py-[50px] lg:max-w-[1440px] lg:flex-row lg:gap-[50px]">
          <ContactUsMap />
          <ContactUsForm />
        </div>
      </div>
    </Suspense>
  );
}
