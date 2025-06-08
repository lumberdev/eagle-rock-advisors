import React from 'react';
import CTAButton from '../General/CTAButton';
import Carousel from '../General/Carousel';

const Portfolio = ({ portfolioData }: { portfolioData: any }) => {
  return (
    <div className="flex flex-col items-start justify-center overflow-hidden py-[100px]">
      <div className="flex flex-col items-start justify-center px-[25px] md:px-[100px]">
        <h4 className="font-dreaming text-eagle-blue text-[38px] font-normal">
          {portfolioData?.heading}
        </h4>
        <p className="text-steel-blue font-monaSan mt-[25px] max-w-[40ch] text-[.875rem] md:text-[1.375rem] lg:mt-[50px]">
          {portfolioData?.subheading}
        </p>
        <CTAButton cta={portfolioData?.cta} color="black" style="!border-[0px] !p-0 mt-[30px]" />
      </div>
      <div className="my-[50px] w-screen">
        <Carousel items={portfolioData?.carouselItems || []} />
      </div>
    </div>
  );
};

export default Portfolio;
