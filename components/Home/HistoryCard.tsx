import React from 'react';

interface HistoryCardProps {
  historyItem: {
    year: string;
    subHeading: string;
    equity: string;
    operatingIn: string;
  };
  index: number;
  cardHeightClass: string;
  filledItemIndex: number;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  historyItem,
  index,
  cardHeightClass,
  filledItemIndex,
}) => {
  const isActive = index <= filledItemIndex;
  return (
    <div
      className={`relative flex w-full flex-col items-center gap-y-[25px] ${cardHeightClass} lg:flex-row lg:justify-between lg:gap-y-0`}
    >
      <div
        className={`relative z-10 mt-[1rem] w-[70%] transition-opacity duration-500 lg:mt-0 lg:w-1/2 lg:px-[50px] ${
          isActive ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <h4 className="font-makarony text-champagne-gold text-[38px] font-normal lg:text-center lg:text-[5.25rem]">
          {historyItem?.year}
        </h4>
      </div>
      <div
        className={`relative z-10 w-[70%] transition-opacity duration-500 lg:w-1/2 lg:px-[50px] ${
          isActive ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <p className="font-makarony text-eagle-navy text-[21px] leading-[140%] lg:text-[24px]">
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
    </div>
  );
};

export default HistoryCard;
