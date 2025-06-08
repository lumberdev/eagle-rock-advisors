import React from 'react';

const Stats = ({ statsData }: { statsData: any }) => {
  const statsItems = statsData?.statItems;
  return (
    <div className="flex flex-col items-center px-[3.125rem] py-[25px] lg:flex-row lg:justify-around lg:py-[6.25rem]">
      {statsItems?.map((item: any, index: number) => (
        <div
          key={index}
          className={`flex w-full max-w-[17.1875rem] flex-col items-center px-[20px] py-[3.125rem] lg:max-w-[26rem] ${
            index % 2 !== 0
              ? 'border-t-[1px] border-b-[1px] border-[#5B728A40] lg:border-t-0 lg:border-r-[1px] lg:border-b-0 lg:border-l-[1px]'
              : ''
          }`}
        >
          <h4 className="font-dreaming text-champagne-gold text-center text-[68px] leading-[120%] tracking-[0] lg:text-[128px]">
            {item?.heading}
          </h4>
          <p className="text-steel-blue font-monaSans mt-[25px] max-w-[40ch] text-center text-[.875rem] md:text-[1.375rem] lg:mt-[50px]">
            {item?.subheading}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
