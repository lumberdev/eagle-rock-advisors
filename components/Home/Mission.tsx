import React from 'react';
import Image from 'next/image';
import CTAButton from '../General/CTAButton';
import { PageMission } from '@/tina/__generated__/types';

const Mission = ({ missionData }: { missionData: PageMission }) => {
  return (
    <section className="flex h-[600px] w-full flex-col items-center justify-center overflow-hidden px-[25px] pb-[100px] md:px-[100px] lg:h-[780px]">
      <div className="border-champagne-gold flex h-full w-full flex-col items-center justify-center border-[1px]">
        <div className="absolute z-0 aspect-[1/1] w-full max-w-[21.87rem] lg:max-w-[36rem]">
          <Image src={missionData?.image || ''} alt="Mission" fill className="z-0 object-contain" />
        </div>
        <h4 className="text-eagle-navy font-makarony mb-[3.125rem] max-w-[25ch] text-center text-[24px] leading-[140%] tracking-[0] lg:text-[48px]">
          {missionData?.description}
        </h4>
        <CTAButton cta={missionData?.cta} />
      </div>
    </section>
  );
};

export default Mission;
