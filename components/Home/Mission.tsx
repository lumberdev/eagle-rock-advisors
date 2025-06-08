import React from 'react';
import Image from 'next/image';
import CTAButton from '../General/CTAButton';

const Mission = ({ missionData }: { missionData: any }) => {
  return (
    <div className="bg-steel-blue flex h-[600px] w-full flex-col items-center justify-center overflow-hidden lg:h-[780px]">
      <div className="absolute z-0 aspect-[1/1] w-full max-w-[21.87rem] lg:max-w-[36rem]">
        <Image src={missionData?.image} alt="Mission" fill className="z-0 object-contain" />
      </div>
      <h4 className="font-dreaming mb-[3.125rem] max-w-[23ch] text-center text-[28px] leading-[140%] tracking-[0] text-white lg:max-w-[45ch] lg:text-[38px]">
        {missionData?.description}
      </h4>
      <CTAButton cta={missionData?.cta} color="white" />
    </div>
  );
};

export default Mission;
