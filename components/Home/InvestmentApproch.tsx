import Image from 'next/image';
import React from 'react';
import CTAButton from '../General/CTAButton';

const InvestmentApproch = ({ investmentApprochData }: { investmentApprochData: any }) => {
  return (
    <section className="justify-space-between flex min-h-[680px] flex-col items-start gap-y-[50px] bg-white px-[25px] pb-[100px] md:px-[100px]">
      <h6 className="font-monaSans text-slate text-[1rem] leading-[140%] tracking-[1.6px] uppercase">
        Our Investment Approach
      </h6>
      <div className="border-champagne-gold flex w-full flex-col items-center justify-center gap-y-[50px] border-[1px] py-[50px]">
        <Image
          src={investmentApprochData?.image}
          alt="Investment Approach"
          className="w-full max-w-[520px]"
          width={100}
          height={100}
        />
        <h3 className="font-makarony text-eagle-navy text-center text-[28px] leading-[140%] tracking-[0] lg:max-w-[52ch]">
          {investmentApprochData?.subHeading}
        </h3>
        <CTAButton cta={investmentApprochData?.cta} />
      </div>
    </section>
  );
};

export default InvestmentApproch;
