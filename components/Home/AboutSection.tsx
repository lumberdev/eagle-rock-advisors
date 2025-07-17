import React from 'react';

const AboutSection = ({ aboutData }: { aboutData: any }) => {
  return (
    <div className="bg-frosted-white flex min-h-[680px] flex-col items-start justify-center px-[25px] py-[100px] md:px-[100px]">
      <h4 className="font-makarony text-eagle-navy w-full max-w-[15ch] text-left text-[4.25rem] text-[38px] leading-[140%] font-normal tracking-[0] md:max-w-[30ch] lg:text-[52px]">
        {aboutData?.heading}
      </h4>
      <p className="text-steel-blue font-monaSan mt-[25px] max-w-[40ch] text-[.875rem] md:text-[1.375rem] lg:mt-[50px] lg:self-end">
        {aboutData?.subheading}
      </p>
    </div>
  );
};

export default AboutSection;
