import React from 'react';
import TimelineLine from './TimelineLine';
import useWindowDimensions from '@/utils/useWindowDimensions';

interface HistoryCardProps {
  historyItem: {
    year: string;
    subHeading: string;
    equity: string;
    operatingIn: string;
  };
  index: number;
  totalItems: number;
  scrollProgress: number;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  historyItem,
  index,
  totalItems,
  scrollProgress,
}) => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  return (
    <div className="relative flex min-h-[300px] w-full flex-col items-center gap-y-[25px] lg:h-[450px] lg:flex-row lg:justify-between lg:gap-y-0">
      <div className="relative z-10 mt-[1rem] w-[70%] lg:mt-0 lg:w-1/2 lg:px-[50px]">
        <h4 className="font-dreaming text-champagne-gold text-[38px] font-normal lg:text-center lg:text-[5.25rem]">
          {historyItem?.year}
        </h4>
      </div>
      <div className="relative z-10 w-[70%] lg:w-1/2 lg:px-[50px]">
        <p className="font-dreaming text-eagle-navy text-[21px] leading-[140%] lg:text-[24px]">
          {historyItem?.subHeading}
        </p>
        {historyItem?.equity && (
          <p className="text-eagle-navy text-slate text-[16px] leading-[160%]">
            Equity: {historyItem?.equity}
          </p>
        )}
        {historyItem?.operatingIn && (
          <p className="text-eagle-navy text-slate text-[16px] leading-[160%]">
            Operating In: {historyItem?.operatingIn}
          </p>
        )}
      </div>
      <TimelineLine
        index={index}
        totalItems={totalItems}
        scrollProgress={scrollProgress}
        isDesktop={isDesktop}
      />
    </div>
  );
};

export default HistoryCard;
