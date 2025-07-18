import Image from 'next/image';
import React from 'react';

type StatItem = {
  title?: string | null;
  iconImage?: string | null;
  heading?: string | null;
  subheading?: string | null;
};

interface StatsProps {
  data?: (StatItem | null)[] | null;
}

const Stats = ({ data }: StatsProps) => {
  return (
    <div className="flex flex-col items-center px-[25px] py-[25px] lg:flex-row lg:justify-around lg:px-[50px] lg:py-[6.25rem]">
      {data?.map((item: any, index: number) => (
        <div
          key={index}
          className={`flex w-full max-w-[325px] flex-col items-center px-[20px] ${item?.iconImage ? 'py-[50px] lg:py-0' : 'py-[3.125rem]'} lg:max-w-[26rem] ${
            index !== data.length - 1 && index !== 0
              ? 'border-t-[1px] border-b-[1px] border-[#5B728A40] lg:border-t-0 lg:border-r-[1px] lg:border-b-0 lg:border-l-[1px]'
              : ''
          }`}
        >
          {item?.iconImage && <Image src={item?.iconImage} alt="Icon" width={72} height={72} />}
          {item?.title && (
            <p className="text-steel-blue font-makarony mt-[25px] w-full text-center text-[24px] md:text-[1.375rem] lg:max-w-[12ch]">
              {item?.title}
            </p>
          )}
          {item?.heading && (
            <h4 className="font-makarony text-champagne-gold text-center text-[68px] leading-[120%] tracking-[0] lg:text-[128px]">
              {item?.heading}
            </h4>
          )}
          {item?.subheading && (
            <p className="text-steel-blue font-monaSans mt-[25px] max-w-[40ch] text-center text-[.875rem] md:text-[1.375rem] lg:mt-[50px]">
              {item?.subheading}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stats;
